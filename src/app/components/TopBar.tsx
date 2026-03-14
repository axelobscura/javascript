"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function TopBar(){
  // Aquí puedes agregar tu lógica para el menú de navegación, si es necesario
  const pathname = usePathname();
  return (
      <div className="flex flex-row items-center justify-center col-span-3 my-0 bg-gray-dark">
          <nav className="flex flex-col w-full sm:flex-row">
              <Link href="/" className="w-full px-4 py-2 mx-2 my-2 text-gray-800 border hover:bg-black hover:text-white">
                <Image
                  src="/javascript-logo.svg"
                  alt="JavaScript Profesional En México"
                  width={200}
                  height={200}
                  style={{
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </Link>
              <Link href="/" className="w-full px-4 py-2 mx-2 my-2 text-gray-800 border hover:bg-black hover:text-white">Inicio</Link>
              <Link href="/noticias" className={pathname === "/noticias" ? "w-full px-4 py-2 mx-2 my-2 text-gray-800 border hover:bg-black text-white" : "w-full px-4 py-2 mx-2 my-2 text-gray-800 border hover:bg-black hover:text-white"}>Noticias</Link>
              <Link href="/articulos" className={pathname === "/articulos" ? "w-full px-4 py-2 mx-2 my-2 text-gray-800 border hover:bg-black text-white" : "w-full px-4 py-2 mx-2 my-2 text-gray-800 border hover:bg-black hover:text-white"}>Artículos</Link>
              <Link href="/proyectos" className={pathname === "/proyectos" ? "w-full px-4 py-2 mx-2 my-2 text-gray-800 border hover:bg-black text-white" : "w-full px-4 py-2 mx-2 my-2 text-gray-800 border hover:bg-black hover:text-white"}>Proyectos</Link>
              <Link href="/contacto" className={pathname === "/contacto" ? "w-full px-4 py-2 mx-2 my-2 text-gray-800 border hover:bg-black text-white" : "w-full px-4 py-2 mx-2 my-2 text-gray-800 border hover:bg-black hover:text-white"}>Contacto</Link>
          </nav>
      </div>
  )
}