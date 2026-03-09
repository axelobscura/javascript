import Link from "next/link";

export default function MenuEntrada(){
    return (
        <div className="flex flex-col items-center justify-center col-span-3 my-8">
            <nav className="flex flex-col w-full sm:flex-row">
                <Link href="/" className="w-full px-4 py-2 mx-2 my-2 text-gray-800 border hover:bg-black hover:text-white">Inicio</Link>
                <Link href="#" className="w-full px-4 py-2 mx-2 my-2 text-gray-800 border hover:bg-black hover:text-white">Noticias</Link>
                <Link href="#" className="w-full px-4 py-2 mx-2 my-2 text-gray-800 border hover:bg-black hover:text-white">Artículos</Link>
                <Link href="#" className="w-full px-4 py-2 mx-2 my-2 text-gray-800 border hover:bg-black hover:text-white">Otros</Link>
                <Link href="#" className="w-full px-4 py-2 mx-2 my-2 text-gray-800 border hover:bg-black hover:text-white">Contacto</Link>
            </nav>
        </div>
    )
}