import { Rajdhani } from 'next/font/google'
import TopBar from '../components/TopBar'

const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  weight:["300", "500", "700"],
  variable: '--font-rajdhani',
})

export const metadata = {
  title: 'NOTICIAS JAVASCRIPT PROFESIONAL EN MÉXICO - Aprende, Crea y Domina el Mundo de JavaScript, desarrollo de aplicaciones web, juegos y más',
  description: 'Noticias sobre desarrollo de JavaScript en México: Aprende, crea y domina el mundo de JavaScript. Descubre tutoriales, guías y recursos para desarrollar aplicaciones web, juegos y mucho más. Mantente al día con las últimas técnicas y tendencias en el ámbito del desarrollo de JavaScript. Únete a nuestra comunidad y lleva tus habilidades de JavaScript al siguiente nivel.',
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
