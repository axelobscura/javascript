import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="relative flex flex-col items-center justify-center min-h-screen w-screen">
        <h1 className='text-gray-dark text-9xl font-light font-sans'>JAVASCRIPT</h1>
        <h3 className='font-sans text-5xl font-light'>LATINOAMÉRICA</h3>
        <p className='text-2xl font-light font-sans text-gray-dark text-center pt-2'>Desbloquea el Poder de JavaScript<br/>Sitios Web con Experiencias Dinámicas e Interactivas</p>
      </div>
    </main>
  )
}
