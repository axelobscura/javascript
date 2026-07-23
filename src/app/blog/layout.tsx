import TopBar from '../components/TopBar'
import FooterInterno from '../components/FooterInterno'

export const metadata = {
  title: 'Blog — JavaScript México',
  description:
    'Blog de JavaScript en español: tutoriales, noticias y tendencias del ecosistema.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function BlogLayout({
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
