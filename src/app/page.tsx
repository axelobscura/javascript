import Link from "next/link";
import { BsFillRecordCircleFill, BsHCircleFill } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="relative flex flex-col items-center justify-center min-h-screen w-screen">
        <h1 className='text-gray-dark text-9xl font-light font-sans'>JAVASCRIPT</h1>
        <ul className="flex p-3">
          <li className="p-2">
            <Link href="/blog">
              <BsHCircleFill size={'2em'} style={{'color':'#111'}}/>
            </Link>
          </li>
          <li className="p-2">
            <Link href='/contacto'>
              <BsFillRecordCircleFill size={'2em'} style={{'color':'#111'}}/>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  )
}
