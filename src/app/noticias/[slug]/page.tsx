import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getJavascriptNews, getNoticiaBySlug } from '../../../lib/mediastack'

export const revalidate = 3600

type PageProps = {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps) {
  const noticia = await getNoticiaBySlug(params.slug)
  if (!noticia) {
    return { title: 'Noticia no encontrada — JavaScript México' }
  }

  return {
    title: `${noticia.titulo} — JavaScript México`,
    description: noticia.resumen,
  }
}

export async function generateStaticParams() {
  const { noticias } = await getJavascriptNews()
  return noticias.map((item) => ({ slug: item.slug }))
}

export default async function NoticiaDetalle({ params }: PageProps) {
  const noticia = await getNoticiaBySlug(params.slug)

  if (!noticia) {
    notFound()
  }

  return (
    <main className="relative mx-auto min-h-[70vh] max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <div
        className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-js-yellow/10 blur-[80px]"
        aria-hidden
      />

      <article className="relative max-w-3xl">
        <Link
          href="/noticias"
          className="font-display text-[10px] tracking-[0.28em] text-js-muted uppercase transition-colors hover:text-js-yellow"
        >
          ← Volver a noticias
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="font-display text-[10px] tracking-[0.3em] text-js-yellow uppercase">
            {noticia.categoria}
          </span>
          <time dateTime={noticia.fechaIso} className="text-xs text-js-muted">
            {noticia.fecha}
          </time>
          <span className="text-xs text-js-muted/70">
            {noticia.fuente}
            {noticia.idioma === 'en' ? ' · EN' : ''}
          </span>
        </div>

        <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-gradient-js sm:text-5xl">
          {noticia.titulo}
        </h1>

        {noticia.autor ? (
          <p className="mt-4 text-sm font-light text-js-muted">
            Por {noticia.autor}
          </p>
        ) : null}

        {noticia.imagen ? (
          <div className="mt-8 overflow-hidden border border-js-yellow/20">
            {/* External news images; unoptimized to avoid remote domain config */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={noticia.imagen}
              alt=""
              className="max-h-[420px] w-full object-cover"
            />
          </div>
        ) : null}

        <div className="mt-8 border-t border-js-yellow/15 pt-8">
          <p className="text-lg font-light leading-relaxed text-js-ink sm:text-xl">
            {noticia.resumen}
          </p>
          <p className="mt-6 text-sm font-light leading-relaxed text-js-muted">
            Mediastack proporciona el resumen de la nota. Para el contenido
            completo, visita la fuente original.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={noticia.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-js-yellow px-8 py-3.5 font-display text-sm font-bold tracking-widest text-js-black uppercase transition-transform hover:scale-[1.02]"
          >
            Leer en la fuente
          </a>
          <Link
            href="/noticias"
            className="border border-js-yellow/50 px-8 py-3.5 font-display text-sm font-medium tracking-widest text-js-ink uppercase transition-colors hover:border-js-yellow hover:bg-js-yellow/10"
          >
            Más noticias
          </Link>
        </div>
      </article>
    </main>
  )
}
