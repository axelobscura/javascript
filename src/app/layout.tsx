import './globals.css'
import { Orbitron, Exo_2 } from 'next/font/google'
import GoogleAnalytics from './components/GoogleAnalytics'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-display',
})

const exo = Exo_2({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
})

export const metadata = {
  title: 'JavaScript México — Hub de noticias JavaScript en español',
  description:
    'El hub de noticias, artículos y proyectos JavaScript en español. Mantente al día con frameworks, herramientas y tendencias del ecosistema JS desde México.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <GoogleAnalytics />
      <body className={`${orbitron.variable} ${exo.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}
