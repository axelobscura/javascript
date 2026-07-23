export type MediastackArticle = {
  author: string | null
  title: string
  description: string | null
  url: string
  source: string
  image: string | null
  category: string
  language: string
  country: string
  published_at: string
}

type MediastackResponse = {
  pagination?: {
    limit: number
    offset: number
    count: number
    total: number
  }
  data?: MediastackArticle[]
  error?: {
    code: string
    message: string
  }
}

export type Noticia = {
  id: string
  slug: string
  categoria: string
  titulo: string
  resumen: string
  fecha: string
  fechaIso: string
  url: string
  fuente: string
  idioma: string
  imagen: string | null
  autor: string | null
  pais: string | null
}

const CATEGORIA_ES: Record<string, string> = {
  general: 'General',
  business: 'Negocios',
  entertainment: 'Entretenimiento',
  health: 'Salud',
  science: 'Ciencia',
  sports: 'Deportes',
  technology: 'Tecnología',
}

const JS_STRONG =
  /\b(javascript|typescript|ecmascript|node\.?js|nodejs|deno\b|bun\b|pnpm|yarn\b|react(?:\.?js)?|vue(?:\.?js)?|angular(?:\.?js)?|next\.?js|nuxt|svelte|remix|nestjs|express(?:\.?js)?|webpack|vite\b|esbuild|jquery|tc39|webassembly|\bwasm\b|tanstack|axios)\b/i

const NPM_CONTEXT =
  /\b(npm)\b.*\b(package|packages|registry|supply[-\s]?chain|malware|attack|compromise|worm|vuln)|(\b(package|packages|registry|supply[-\s]?chain|malware|attack|compromise|worm)\b.*\b(npm)\b)/i

const NOISE =
  /\bnational product magazine\b|\bmid-year awards\b|\bclassic (song|fight) of the day\b|\bmovie trailer\b/i

function decodeEntities(text: string) {
  return text
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
      String.fromCharCode(parseInt(hex, 16))
    )
    .replace(/&#(\d+);/g, (_, num) => String.fromCharCode(Number(num)))
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
}

function formatFecha(iso: string) {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso
  return new Intl.DateTimeFormat('es-MX', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date)
}

function shortHash(input: string) {
  let hash = 0
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0
  }
  return hash.toString(36)
}

function slugify(title: string, url: string) {
  const base = decodeEntities(title)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 72)

  return `${base || 'noticia'}-${shortHash(url)}`
}

function isJsRelevant(article: MediastackArticle) {
  const haystack = decodeEntities(
    `${article.title ?? ''} ${article.description ?? ''}`
  )
  if (NOISE.test(haystack)) return false
  return JS_STRONG.test(haystack) || NPM_CONTEXT.test(haystack)
}

function toNoticia(article: MediastackArticle, index: number): Noticia {
  const titulo = decodeEntities(article.title?.trim() || 'Sin título')
  const resumen = decodeEntities(
    article.description?.trim() ||
      `Fuente: ${article.source}. Abre el enlace para leer la nota completa.`
  )

  return {
    id: `${article.url}-${index}`,
    slug: slugify(titulo, article.url),
    categoria: CATEGORIA_ES[article.category] ?? article.category ?? 'Noticia',
    titulo,
    resumen,
    fecha: formatFecha(article.published_at),
    fechaIso: article.published_at,
    url: article.url,
    fuente: article.source,
    idioma: article.language,
    imagen: article.image || null,
    autor: article.author ? decodeEntities(article.author) : null,
    pais: article.country || null,
  }
}

function rankArticles(articles: MediastackArticle[]) {
  return [...articles].sort((a, b) => {
    const aEs = a.language === 'es' ? 1 : 0
    const bEs = b.language === 'es' ? 1 : 0
    if (aEs !== bEs) return bEs - aEs

    return (
      new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    )
  })
}

async function requestNews(keywords: string) {
  const accessKey = process.env.NEWS_API
  if (!accessKey) {
    return {
      articles: [] as MediastackArticle[],
      error: 'Falta NEWS_API en .env.local',
    }
  }

  const search = new URLSearchParams({
    access_key: accessKey,
    keywords,
    languages: 'es,en',
    sort: 'published_desc',
    limit: '25',
  })

  // Free Mediastack plans typically require HTTP (not HTTPS).
  const url = `http://api.mediastack.com/v1/news?${search.toString()}`

  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      return {
        articles: [] as MediastackArticle[],
        error:
          res.status === 429
            ? 'Límite de Mediastack alcanzado. Reintentamos en la próxima hora.'
            : `Mediastack respondió ${res.status}`,
      }
    }

    const json = (await res.json()) as MediastackResponse
    if (json.error) {
      const rateLimited = json.error.code === 'rate_limit_reached'
      return {
        articles: [] as MediastackArticle[],
        error: rateLimited
          ? 'Límite de Mediastack alcanzado. Reintentamos en la próxima hora.'
          : json.error.message,
      }
    }

    return {
      articles: (json.data ?? []).filter(isJsRelevant),
      error: null as string | null,
    }
  } catch (err) {
    return {
      articles: [] as MediastackArticle[],
      error: err instanceof Error ? err.message : 'Error al consultar Mediastack',
    }
  }
}

export async function getJavascriptNews(): Promise<{
  noticias: Noticia[]
  error: string | null
  sourceNote: string | null
}> {
  // One request only — free Mediastack plans rate-limit aggressively.
  // "npm" returns higher-signal JS ecosystem news than broad "javascript" on free tier.
  // Cached for 1 hour via fetch revalidate + page revalidate.
  const { articles, error } = await requestNews('npm')

  const ranked = rankArticles(articles)
  const hasEnglish = ranked.some((a) => a.language === 'en')
  const hasSpanish = ranked.some((a) => a.language === 'es')

  const sourceNote =
    hasEnglish && !hasSpanish
      ? 'Incluye notas en inglés cuando hay poca cobertura en español.'
      : hasEnglish && hasSpanish
        ? 'Prioriza español y completa con inglés del ecosistema JS.'
        : null

  return {
    noticias: ranked.map(toNoticia),
    error: ranked.length ? null : error,
    sourceNote,
  }
}

export async function getNoticiaBySlug(slug: string): Promise<Noticia | null> {
  const { noticias } = await getJavascriptNews()
  return noticias.find((item) => item.slug === slug) ?? null
}
