import { BsFillRecordCircleFill, BsHCircleFill } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="relative flex flex-col items-center justify-center min-h-screen w-screen">
        <h1 className='text-gray-dark text-9xl font-light font-sans'>JAVASCRIPT</h1>
        <div className="flex flex-row items-center">
          <h3 className='font-sans text-5xl font-light p-3'>LATINOAMÉRICA</h3>
        </div>
        <p className='text-2xl font-light font-sans text-gray-dark text-center pt-2'>Desbloquea el Poder de JavaScript<br/>Sitios Web con Experiencias Dinámicas e Interactivas</p>
        <ul>
          <li><BsHCircleFill/></li>
          <li><BsFillRecordCircleFill/></li>
        </ul>
      </div>
    </main>
  )
}
