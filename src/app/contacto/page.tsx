const canales = [
  {
    label: 'Email',
    value: 'axosar@gmail.com',
    href: 'mailto:axosar@gmail.com',
    note: 'Respuesta en 24–48 h',
  },
  {
    label: 'Teléfono',
    value: '+52 55 3220 6321',
    href: 'tel:+525532206321',
    note: 'Lun–Vie · 10:00–18:00 CST',
  },
  {
    label: 'Ubicación',
    value: 'Ciudad de México, MX',
    href: null,
    note: 'Remoto · LATAM & US',
  },
]

const temas = [
  'Propuesta de noticia',
  'Colaboración / partnership',
  'Oferta laboral',
  'Tip para la comunidad',
  'Consultoría técnica',
]

const ejemplos = [
  {
    tipo: 'Noticia',
    titulo: 'Node 22 LTS ya disponible en español',
    preview:
      'Hola, les comparto un resumen curado sobre el release de Node 22 para el feed de noticias…',
    tiempo: 'Hace 2 días',
  },
  {
    tipo: 'Colaboración',
    titulo: 'Workshop GraphQL en CDMX',
    preview:
      'Somos un meetup local y queremos co-crear un workshop de Apollo + NestJS con ustedes…',
    tiempo: 'Hace 5 días',
  },
  {
    tipo: 'Tip',
    titulo: 'Patrón Dataloader en producción',
    preview:
      'Les dejo un tip corto sobre cómo evitamos N+1 en un gateway federado con ~40% menos payload…',
    tiempo: 'Hace 1 semana',
  },
]

const faqs = [
  {
    q: '¿Puedo enviar noticias en inglés?',
    a: 'Sí. Priorizamos español, pero publicamos referencias EN cuando aportan al ecosistema JS.',
  },
  {
    q: '¿Ofrecen consultoría?',
    a: 'Sí — arquitectura GraphQL, Next.js y migraciones cloud. Usa el formulario con el tema “Consultoría técnica”.',
  },
  {
    q: '¿Cuánto tardan en responder?',
    a: 'Normalmente entre 24 y 48 horas hábiles.',
  },
]

export default function Contacto() {
  return (
    <main className="relative mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
      <div
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-js-yellow/12 blur-[100px] animate-pulse-glow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-40 h-48 w-48 rounded-full bg-js-yellow/8 blur-[80px]"
        aria-hidden
      />

      <div className="relative">
        <header className="border-b border-js-yellow/15 pb-12">
          <p className="animate-fade-up font-display text-xs tracking-[0.4em] text-js-yellow uppercase">
            Conecta · JS México
          </p>
          <h1 className="animate-fade-up delay-1 mt-3 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-gradient-js sm:text-6xl">
            Hablemos del siguiente ship
          </h1>
          <p className="animate-fade-up delay-2 mt-5 max-w-xl text-base font-light leading-relaxed text-js-muted sm:text-lg">
            Noticias, colaboraciones, tips de la comunidad u oportunidades
            senior full-stack — escríbenos y te respondemos pronto.
          </p>

          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            {canales.map((canal) => (
              <div
                key={canal.label}
                className="border-l border-js-yellow/40 pl-4"
              >
                <dt className="font-display text-[10px] tracking-[0.3em] text-js-yellow uppercase">
                  {canal.label}
                </dt>
                <dd className="mt-2">
                  {canal.href ? (
                    <a
                      href={canal.href}
                      className="text-sm font-light text-js-ink transition-colors hover:text-js-yellow sm:text-base"
                    >
                      {canal.value}
                    </a>
                  ) : (
                    <span className="text-sm font-light text-js-ink sm:text-base">
                      {canal.value}
                    </span>
                  )}
                  <p className="mt-1 text-xs font-light text-js-muted">
                    {canal.note}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </header>

        <div className="grid gap-14 border-b border-js-yellow/15 py-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <section>
            <p className="font-display text-[10px] tracking-[0.35em] text-js-yellow uppercase">
              Mensaje
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-js-ink sm:text-3xl">
              Envía tu propuesta
            </h2>

            <form className="mt-8 space-y-5" action="#" method="post">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="nombre"
                  label="Nombre"
                  defaultValue="Ana Rivera"
                  placeholder="Tu nombre"
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  defaultValue="ana.rivera@ejemplo.dev"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="tema"
                  className="mb-2 block font-display text-[10px] tracking-[0.3em] text-js-yellow uppercase"
                >
                  Tema
                </label>
                <div className="relative">
                  <select
                    id="tema"
                    name="tema"
                    defaultValue={temas[0]}
                    className="w-full appearance-none border border-js-yellow/25 bg-js-surface/80 px-4 py-3 pr-10 text-js-ink outline-none transition-colors focus:border-js-yellow"
                  >
                    {temas.map((tema) => (
                      <option key={tema} value={tema}>
                        {tema}
                      </option>
                    ))}
                  </select>
                  <span
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-js-yellow"
                    aria-hidden
                  >
                    ▾
                  </span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="asunto"
                  className="mb-2 block font-display text-[10px] tracking-[0.3em] text-js-yellow uppercase"
                >
                  Asunto
                </label>
                <input
                  id="asunto"
                  name="asunto"
                  type="text"
                  defaultValue="Resumen Node 22 LTS para el feed"
                  className="w-full border border-js-yellow/25 bg-js-surface/80 px-4 py-3 text-js-ink outline-none transition-colors focus:border-js-yellow"
                  placeholder="Asunto del mensaje"
                />
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="mb-2 block font-display text-[10px] tracking-[0.3em] text-js-yellow uppercase"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={6}
                  defaultValue={
                    'Hola equipo JS México,\n\nLes comparto un resumen curado del release de Node 22 LTS (rendimiento, TypeScript nativo y notas de migración) para evaluar en el feed de noticias.\n\n¿Les interesa que lo adapte al tono del hub?\n\nSaludos,\nAna'
                  }
                  className="w-full resize-y border border-js-yellow/25 bg-js-surface/80 px-4 py-3 text-sm font-light leading-relaxed text-js-ink outline-none transition-colors focus:border-js-yellow"
                  placeholder="Cuéntanos..."
                />
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="bg-js-yellow px-8 py-3.5 font-display text-sm font-bold tracking-widest text-js-black uppercase transition-transform hover:scale-[1.02]"
                >
                  Enviar mensaje
                </button>
                <p className="text-xs font-light text-js-muted">
                  Datos de ejemplo — edítalos antes de enviar.
                </p>
              </div>
            </form>
          </section>

          {/* Side panel */}
          <aside className="space-y-10">
            <div>
              <p className="font-display text-[10px] tracking-[0.35em] text-js-yellow uppercase">
                Inbox · Ejemplos
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-js-ink">
                Así llegan las propuestas
              </h2>
              <ul className="mt-6 divide-y divide-js-yellow/10">
                {ejemplos.map((item) => (
                  <li key={item.titulo} className="py-5 first:pt-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-display text-[10px] tracking-[0.28em] text-js-yellow uppercase">
                        {item.tipo}
                      </span>
                      <span className="text-xs text-js-muted">{item.tiempo}</span>
                    </div>
                    <p className="mt-2 font-display text-sm font-semibold text-js-ink sm:text-base">
                      {item.titulo}
                    </p>
                    <p className="mt-1 text-sm font-light leading-relaxed text-js-muted">
                      {item.preview}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-js-yellow/20 bg-js-yellow/5 p-5">
              <p className="font-display text-[10px] tracking-[0.3em] text-js-yellow uppercase">
                Disponibilidad
              </p>
              <p className="mt-3 font-display text-lg font-semibold text-js-ink">
                Abierto a roles senior & collabs
              </p>
              <p className="mt-2 text-sm font-light leading-relaxed text-js-muted">
                GraphQL · Next.js · arquitectura cloud · mentoría de equipos.
                Revisa el CV o agenda por email.
              </p>
              <a
                href="/cv"
                className="mt-4 inline-flex font-display text-[11px] tracking-[0.28em] text-js-yellow uppercase transition-opacity hover:opacity-80"
              >
                Ver CV →
              </a>
            </div>
          </aside>
        </div>

        {/* FAQ */}
        <section className="py-14">
          <p className="font-display text-[10px] tracking-[0.35em] text-js-yellow uppercase">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-js-ink sm:text-3xl">
            Preguntas frecuentes
          </h2>
          <ul className="mt-10 divide-y divide-js-yellow/10">
            {faqs.map((item) => (
              <li key={item.q} className="grid gap-3 py-6 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
                <p className="font-display text-sm font-semibold text-js-ink sm:text-base">
                  {item.q}
                </p>
                <p className="text-sm font-light leading-relaxed text-js-muted sm:text-base">
                  {item.a}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}

function Field({
  id,
  label,
  type = 'text',
  defaultValue,
  placeholder,
}: {
  id: string
  label: string
  type?: string
  defaultValue?: string
  placeholder?: string
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-display text-[10px] tracking-[0.3em] text-js-yellow uppercase"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full border border-js-yellow/25 bg-js-surface/80 px-4 py-3 text-js-ink outline-none transition-colors focus:border-js-yellow"
      />
    </div>
  )
}
