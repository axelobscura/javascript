import TopBar from '../components/TopBar'
import FooterInterno from '../components/FooterInterno'

export const metadata = {
  title: 'Proyectos — JavaScript México',
  description:
    'Showroom de diseño web: hubs, SaaS, fintech, portfolios y plataformas developer con estética futurista yellow/black.',
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
