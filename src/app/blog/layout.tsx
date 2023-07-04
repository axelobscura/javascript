import '../globals.css'
import { Rajdhani } from 'next/font/google'

const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  weight:["300", "500", "700"],
  variable: '--font-rajdhani',
})

export const metadata = {
  title: 'JAVASCRIPT ARTÍCULOS NOTICIAS Y TUTORIALES',
  description: 'Sitio web de desarrollo de JavaScript: Aprende, crea y domina el mundo de JavaScript. Descubre tutoriales, guías y recursos para desarrollar aplicaciones web, juegos y mucho más. Mantente al día con las últimas técnicas y tendencias en el ámbito del desarrollo de JavaScript.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`container ${rajdhani.className}`}>
      <div className="grid grid-cols-6">
        <div className='menu_categorias'>
          <h2>Artículos sobre javascript</h2>
        </div>
        <div className='col-span-5'>
          {children}
        </div>
      </div>
    </div>
  )
}
