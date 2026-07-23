export type Proyecto = {
  id: string
  name: string
  tag: string
  year: string
  description: string
  stack: string[]
  href: string
  external?: boolean
  visual: 'mesh' | 'stripes' | 'orbit' | 'terminal' | 'editorial' | 'signal'
}

export const proyectos: Proyecto[] = [
  {
    id: 'js-mexico',
    name: 'JavaScript México',
    tag: 'News hub',
    year: '2026',
    description:
      'Hub futurista de noticias JS en español: feed en vivo, detalle de artículos y currículum bilingüe con identidad yellow/black.',
    stack: ['Next.js', 'TypeScript', 'Mediastack', 'Tailwind'],
    href: '/',
    visual: 'mesh',
  },
  {
    id: 'linear-inspired',
    name: 'Pulseboard',
    tag: 'SaaS UI',
    year: '2025',
    description:
      'Interfaz de product ops con tipografía densa, estados en tiempo real y navegación tipo command palette — inspirada en Linear.',
    stack: ['React', 'Framer Motion', 'GraphQL', 'Radix'],
    href: 'https://linear.app',
    external: true,
    visual: 'signal',
  },
  {
    id: 'stripe-press',
    name: 'Volt Pay',
    tag: 'Fintech',
    year: '2025',
    description:
      'Landing de pagos con hero full-bleed, gradientes atmosféricos y storytelling de producto al estilo Stripe Press.',
    stack: ['Next.js', 'Three.js', 'CSS', 'Vercel'],
    href: 'https://stripe.com',
    external: true,
    visual: 'stripes',
  },
  {
    id: 'awwwards-folio',
    name: 'Obscura Studio',
    tag: 'Portfolio',
    year: '2024',
    description:
      'Portfolio de estudio con scroll cinematográfico, tipografía display y transiciones de sección — vibes Awwwards.',
    stack: ['GSAP', 'WebGL', 'Nuxt', 'Lenis'],
    href: 'https://www.awwwards.com',
    external: true,
    visual: 'editorial',
  },
  {
    id: 'vercel-ship',
    name: 'Shipyard',
    tag: 'Developer platform',
    year: '2024',
    description:
      'Marketing + docs de plataforma edge: grid técnico, dark UI y CTAs de alto contraste al estilo Vercel.',
    stack: ['Next.js', 'MDX', 'Turborepo', 'Edge'],
    href: 'https://vercel.com',
    external: true,
    visual: 'terminal',
  },
  {
    id: 'raycast-ext',
    name: 'Command Ring',
    tag: 'Productivity',
    year: '2023',
    description:
      'Experiencia tipo launcher con búsqueda fuzzy, atajos y paneles flotantes — referencia Raycast / Arc.',
    stack: ['Electron', 'React', 'TypeScript', 'SQLite'],
    href: 'https://www.raycast.com',
    external: true,
    visual: 'orbit',
  },
]
