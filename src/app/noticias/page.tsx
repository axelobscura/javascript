import Link from 'next/link'
import { getJavascriptNews } from '../../lib/mediastack'

export const revalidate = 3600

export default async function Noticias() {
  const { noticias, error, sourceNote } = await getJavascriptNews()

  return (
    <main className="relative mx-auto min-h-[70vh] max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <div
        className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-js-yellow/10 blur-[80px]"
        aria-hidden
      />

      <div className="relative">
        <p className="font-display text-xs tracking-[0.4em] text-js-yellow uppercase">
          En vivo · Mediastack
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-gradient-js sm:text-5xl">
          Noticias JavaScript
        </h1>
        <p className="mt-4 max-w-2xl text-base font-light text-js-muted">
          Lo último del ecosistema JS, curado en español para desarrolladores en
          México y Latinoamérica.
        </p>
        {sourceNote ? (
          <p className="mt-3 text-sm font-light text-js-muted/80">{sourceNote}</p>
        ) : null}

        {error ? (
          <div className="mt-12 border border-js-yellow/30 bg-js-yellow/5 px-5 py-6">
            <p className="font-display text-xs tracking-[0.25em] text-js-yellow uppercase">
              No se pudieron cargar las noticias
            </p>
            <p className="mt-2 text-sm font-light text-js-muted">{error}</p>
          </div>
        ) : null}

        {!error && noticias.length === 0 ? (
          <div className="mt-12 border border-js-yellow/20 px-5 py-6">
            <p className="font-display text-sm tracking-[0.2em] text-js-muted uppercase">
              Sin resultados por ahora
            </p>
            <p className="mt-2 text-sm font-light text-js-muted">
              Vuelve más tarde — la API se actualiza cada hora.
            </p>
          </div>
        ) : null}

        {noticias.length > 0 ? (
          <ul className="mt-12 divide-y divide-js-yellow/10">
            {noticias.map((item) => (
              <li key={item.id} className="group py-8 first:pt-0">
                <article className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between md:gap-10">
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <span className="font-display text-[10px] tracking-[0.3em] text-js-yellow uppercase">
                        {item.categoria}
                      </span>
                      <time
                        dateTime={item.fechaIso}
                        className="text-xs text-js-muted"
                      >
                        {item.fecha}
                      </time>
                      <span className="text-xs text-js-muted/70">
                        {item.fuente}
                        {item.idioma === 'en' ? ' · EN' : ''}
                      </span>
                    </div>
                    <h2 className="font-display text-xl font-semibold leading-snug text-js-ink transition-colors duration-300 group-hover:text-js-yellow sm:text-2xl">
                      <Link href={`/noticias/${item.slug}`}>{item.titulo}</Link>
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm font-light leading-relaxed text-js-muted sm:text-base">
                      {item.resumen}
                    </p>
                  </div>
                  <Link
                    href={`/noticias/${item.slug}`}
                    className="shrink-0 font-display text-[10px] tracking-[0.28em] text-js-muted uppercase transition-colors hover:text-js-yellow"
                  >
                    Leer más →
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </main>
  )
}
