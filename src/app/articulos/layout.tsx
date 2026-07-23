import TopBar from '../components/TopBar'
import FooterInterno from '../components/FooterInterno'

export const metadata = {
  title: 'Artículos — JavaScript México',
  description:
    'Artículos y guías de JavaScript en español para aprender, crear y dominar el ecosistema.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function ArticulosLayout({
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
