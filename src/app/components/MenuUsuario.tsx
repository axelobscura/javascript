import Link from "next/link";
import { BsFillRecordCircleFill, BsHCircleFill, BsSearch } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";

export default function MenuUsuario(){
    return (
        <div className="col-span-3 flex items-center justify-center">
            <Link href="/">
                <BsSearch />
            </Link>
            <Link href="/">
                <BsFillRecordCircleFill />
            </Link>
            <Link href="/">
                <BsHCircleFill />
            </Link>
            <Link href="/">
                <BiUserCircle />
            </Link>
        </div>
    )
}