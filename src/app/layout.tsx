import './globals.css'
import { Rajdhani } from 'next/font/google'

const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  weight:["300", "500", "700"],
  variable: '--font-rajdhani',
})

export const metadata = {
  title: 'JAVASCRIPT EN MÉXICO',
  description: 'Sitio web de desarrollo de JavaScript: Aprende, crea y domina el mundo de JavaScript. Descubre tutoriales, guías y recursos para desarrollar aplicaciones web, juegos y mucho más. Mantente al día con las últimas técnicas y tendencias en el ámbito del desarrollo de JavaScript.',
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
      <body className={rajdhani.className}>{children}</body>
    </html>
  )
}
