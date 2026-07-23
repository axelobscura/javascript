import Link from 'next/link'
import { proyectos, type Proyecto } from '../../data/proyectos'

export default function Proyectos() {
  const [featured, ...rest] = proyectos

  return (
    <main className="relative mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <div
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-js-yellow/15 blur-[100px] animate-pulse-glow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-1/3 h-56 w-56 rounded-full bg-js-yellow/8 blur-[80px]"
        aria-hidden
      />

      <div className="relative">
        <header className="border-b border-js-yellow/15 pb-12">
          <p className="animate-fade-up font-display text-xs tracking-[0.4em] text-js-yellow uppercase">
            Showroom · Web design
          </p>
          <h1 className="animate-fade-up delay-1 mt-3 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-gradient-js sm:text-6xl">
            Proyectos que se sienten producto
          </h1>
          <p className="animate-fade-up delay-2 mt-5 max-w-xl text-base font-light leading-relaxed text-js-muted sm:text-lg">
            Ejemplos de diseño web contemporáneo: tipografía expresiva,
            atmósfera con gradientes y UI lista para producción.
          </p>
        </header>

        {/* Featured */}
        <section className="border-b border-js-yellow/15 py-14">
          <p className="font-display text-[10px] tracking-[0.35em] text-js-yellow uppercase">
            Featured
          </p>
          <article className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <ProjectVisual project={featured} featured />
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-display text-[10px] tracking-[0.3em] text-js-yellow uppercase">
                  {featured.tag}
                </span>
                <span className="text-xs text-js-muted">{featured.year}</span>
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-js-ink sm:text-4xl">
                {featured.name}
              </h2>
              <p className="mt-4 text-base font-light leading-relaxed text-js-muted">
                {featured.description}
              </p>
              <p className="mt-5 text-xs font-light tracking-wide text-js-muted/80">
                {featured.stack.join(' · ')}
              </p>
              <ProjectLink project={featured} className="mt-8" />
            </div>
          </article>
        </section>

        {/* Gallery */}
        <section className="py-14">
          <p className="font-display text-[10px] tracking-[0.35em] text-js-yellow uppercase">
            Gallery
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-js-ink sm:text-3xl">
            Más referencias de diseño
          </h2>

          <ul className="mt-12 space-y-0">
            {rest.map((project, index) => (
              <li
                key={project.id}
                className="group border-t border-js-yellow/10 py-10 last:border-b last:border-js-yellow/10"
              >
                <article
                  className={`grid gap-8 md:grid-cols-2 md:items-center ${
                    index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <ProjectVisual project={project} />
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-display text-[10px] tracking-[0.3em] text-js-yellow uppercase">
                        0{index + 2} · {project.tag}
                      </span>
                      <span className="text-xs text-js-muted">{project.year}</span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-js-ink transition-colors group-hover:text-js-yellow sm:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-js-muted sm:text-base">
                      {project.description}
                    </p>
                    <p className="mt-4 text-xs font-light tracking-wide text-js-muted/80">
                      {project.stack.join(' · ')}
                    </p>
                    <ProjectLink project={project} className="mt-6" />
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-js-yellow/15 pt-12 pb-4">
          <p className="font-display text-xs tracking-[0.35em] text-js-yellow uppercase">
            Colabora
          </p>
          <h2 className="mt-3 max-w-lg font-display text-2xl font-bold tracking-tight text-js-ink sm:text-3xl">
            ¿Buscas un full-stack senior para el siguiente ship?
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/cv"
              className="bg-js-yellow px-8 py-3.5 font-display text-sm font-bold tracking-widest text-js-black uppercase transition-transform hover:scale-[1.02]"
            >
              Ver CV
            </Link>
            <Link
              href="/contacto"
              className="border border-js-yellow/50 px-8 py-3.5 font-display text-sm font-medium tracking-widest text-js-ink uppercase transition-colors hover:border-js-yellow hover:bg-js-yellow/10"
            >
              Contacto
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

function ProjectLink({
  project,
  className = '',
}: {
  project: Proyecto
  className?: string
}) {
  const label = project.external ? 'Ver referencia →' : 'Abrir proyecto →'
  const classes = `inline-flex font-display text-[11px] tracking-[0.28em] text-js-yellow uppercase transition-opacity hover:opacity-80 ${className}`

  if (project.external) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {label}
      </a>
    )
  }

  return (
    <Link href={project.href} className={classes}>
      {label}
    </Link>
  )
}

function ProjectVisual({
  project,
  featured = false,
}: {
  project: Proyecto
  featured?: boolean
}) {
  return (
    <div
      className={`relative overflow-hidden border border-js-yellow/25 bg-js-void transition-all duration-500 group-hover:border-js-yellow/50 group-hover:shadow-[0_0_40px_rgba(247,223,30,0.12)] ${
        featured ? 'min-h-[280px] sm:min-h-[340px]' : 'min-h-[220px] sm:min-h-[260px]'
      }`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-js-yellow/15 bg-js-surface/80 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-js-yellow/80" />
        <span className="h-2 w-2 rounded-full bg-js-yellow/40" />
        <span className="h-2 w-2 rounded-full bg-js-yellow/20" />
        <span className="ml-3 truncate font-display text-[9px] tracking-[0.2em] text-js-muted uppercase">
          {project.name.toLowerCase().replace(/\s+/g, '')}.dev
        </span>
      </div>

      <div className="relative h-[calc(100%-36px)] min-h-[180px] overflow-hidden p-5 sm:p-7">
        <VisualScene type={project.visual} title={project.name} />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-js-void/80 via-transparent to-transparent"
          aria-hidden
        />
      </div>
    </div>
  )
}

function VisualScene({
  type,
  title,
}: {
  type: Proyecto['visual']
  title: string
}) {
  switch (type) {
    case 'mesh':
      return (
        <div className="relative h-full">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(247,223,30,0.35),transparent_55%),radial-gradient(ellipse_at_80%_70%,rgba(247,223,30,0.12),transparent_50%)]" />
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(247,223,30,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(247,223,30,0.15)_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="relative z-10 flex h-full flex-col justify-end">
            <p className="font-display text-[10px] tracking-[0.35em] text-js-yellow uppercase">
              Live hub
            </p>
            <p className="mt-2 max-w-[12ch] font-display text-2xl font-bold leading-none text-js-ink sm:text-3xl">
              {title}
            </p>
          </div>
        </div>
      )
    case 'signal':
      return (
        <div className="relative h-full">
          <div className="space-y-2">
            {[92, 70, 84, 58, 76].map((w, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="h-2 w-2 bg-js-yellow" />
                <span
                  className="h-2 bg-gradient-to-r from-js-yellow to-js-yellow/10"
                  style={{ width: `${w}%` }}
                />
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 right-0 border border-js-yellow/30 bg-js-surface/90 px-4 py-3 backdrop-blur-sm">
            <p className="font-display text-[9px] tracking-[0.25em] text-js-yellow uppercase">
              Status
            </p>
            <p className="mt-1 font-display text-lg text-js-ink">98.4%</p>
          </div>
        </div>
      )
    case 'stripes':
      return (
        <div className="relative h-full overflow-hidden">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-js-yellow/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[linear-gradient(180deg,transparent,rgba(247,223,30,0.2))]" />
          <div className="relative z-10 pt-2">
            <div className="h-px w-full bg-js-yellow/40" />
            <div className="mt-6 max-w-[14ch] font-display text-2xl font-bold leading-tight text-js-ink sm:text-3xl">
              Payments that feel instant
            </div>
            <div className="mt-6 inline-block bg-js-yellow px-4 py-2 font-display text-[10px] font-bold tracking-widest text-js-black uppercase">
              Start now
            </div>
          </div>
        </div>
      )
    case 'editorial':
      return (
        <div className="relative grid h-full grid-cols-[1fr_1.2fr] gap-4">
          <div className="flex flex-col justify-between border-r border-js-yellow/20 pr-3">
            <p className="font-display text-[9px] tracking-[0.3em] text-js-yellow uppercase">
              Vol. 04
            </p>
            <p className="font-display text-xl font-bold leading-none text-js-ink sm:text-2xl">
              Form follows motion
            </p>
          </div>
          <div className="space-y-3 pt-1">
            <div className="h-16 bg-gradient-to-br from-js-yellow/40 to-transparent" />
            <div className="h-2 w-4/5 bg-js-yellow/25" />
            <div className="h-2 w-3/5 bg-js-yellow/15" />
            <div className="h-2 w-2/3 bg-js-yellow/10" />
          </div>
        </div>
      )
    case 'terminal':
      return (
        <div className="relative h-full font-mono text-[11px] leading-relaxed text-js-muted">
          <p>
            <span className="text-js-yellow">➜</span> ship --prod --edge
          </p>
          <p className="mt-2 text-js-ink/80">✓ build optimized</p>
          <p className="text-js-ink/80">✓ routes cached</p>
          <p className="text-js-ink/80">✓ deploy complete</p>
          <p className="mt-4 font-display text-xl font-bold tracking-tight text-js-ink">
            Ready on edge
          </p>
          <div className="absolute bottom-0 right-0 h-20 w-20 rounded-full border border-js-yellow/30 bg-js-yellow/10 blur-xl" />
        </div>
      )
    case 'orbit':
      return (
        <div className="relative flex h-full items-center justify-center">
          <div className="absolute h-36 w-36 rounded-full border border-js-yellow/20" />
          <div className="absolute h-24 w-24 rounded-full border border-js-yellow/35 animate-pulse-glow" />
          <div className="absolute h-12 w-12 rounded-full bg-js-yellow/90 shadow-[0_0_30px_rgba(247,223,30,0.45)]" />
          <div className="absolute -right-2 top-6 border border-js-yellow/40 bg-js-surface px-3 py-2">
            <p className="font-display text-[9px] tracking-[0.2em] text-js-muted uppercase">
              ⌘ K
            </p>
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-center font-display text-sm tracking-[0.2em] text-js-ink uppercase">
            {title}
          </div>
        </div>
      )
    default:
      return null
  }
}
