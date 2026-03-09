import './globals.css'
import { Rajdhani } from 'next/font/google'
import GoogleAnalytics from './components/GoogleAnalytics'

const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  weight:["300", "500", "700"],
  variable: '--font-rajdhani',
})

export const metadata = {
  title: 'JAVASCRIPT PROFESIONAL EN MÉXICO - Aprende, Crea y Domina el Mundo de JavaScript, desarrollo de aplicaciones web, juegos y más',
  description: 'Desarrollo de JavaScript en México: Aprende, crea y domina el mundo de JavaScript. Descubre tutoriales, guías y recursos para desarrollar aplicaciones web, juegos y mucho más. Mantente al día con las últimas técnicas y tendencias en el ámbito del desarrollo de JavaScript. Únete a nuestra comunidad y lleva tus habilidades de JavaScript al siguiente nivel.',
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
    <html lang="en">
      <GoogleAnalytics />
      <body className={rajdhani.className}>{children}</body>
    </html>
  )
}
