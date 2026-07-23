import TopBar from '../components/TopBar'
import FooterInterno from '../components/FooterInterno'

export const metadata = {
  title: 'CV — Axel Laurent Obscura Sarzotti | JavaScript México',
  description:
    'Curriculum de Axel Laurent Obscura Sarzotti — Senior Full Stack Developer con 22+ años en GraphQL, Node.js, React, Next.js y cloud.',
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
