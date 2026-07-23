import TopBar from '../components/TopBar'
import FooterInterno from '../components/FooterInterno'

export const metadata = {
  title: 'CV — Axel Laurent Obscura Sarzotti | JavaScript México',
  description:
    'Currículum de Axel Laurent Obscura Sarzotti — Desarrollador Full Stack Senior con 22+ años en GraphQL, Node.js, React, Next.js y cloud. Disponible en español e inglés.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function ProyectosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-mesh">
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-60" aria-hidden />
      <TopBar />
      <div className="relative z-10 flex-1">{children}</div>
      <FooterInterno />
    </div>
  )
}
