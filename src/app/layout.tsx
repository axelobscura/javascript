import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
