import { Rajdhani } from 'next/font/google'
import TopBar from '../components/TopBar'

const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  weight:["300", "500", "700"],
  variable: '--font-rajdhani',
})

export const metadata = {
  title: 'CONTACTO JAVASCRIPT ARTÍCULOS NOTICIAS Y TUTORIALES',
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
    <div>
      <TopBar />
      <div className='grid grid-cols-[30%_70%]'>
        <div className='bg-gray-dark'>

        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}
