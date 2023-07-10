import { BiLogoJavascript } from "react-icons/bi";

export default function MenuLateral(){
    return (
        <div className="col-span-3 flex flex-col items-center justify-center">
            <BiLogoJavascript />
            <hr/>
            <nav className="flex flex-col bg-gray-100 w-full">
                <a href="#" className="py-2 px-4 text-gray-800 hover:bg-gray-200">Home</a>
                <a href="#" className="py-2 px-4 text-gray-800 hover:bg-gray-200">Noticias</a>
                <a href="#" className="py-2 px-4 text-gray-800 hover:bg-gray-200">Artículos</a>
                <a href="#" className="py-2 px-4 text-gray-800 hover:bg-gray-200">Otros</a>
            </nav>
        </div>
    )
}