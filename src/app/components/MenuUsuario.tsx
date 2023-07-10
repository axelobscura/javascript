import Link from "next/link";
import { BsFillRecordCircleFill, BsHCircleFill } from "react-icons/bs";

export default function MenuUsuario(){
    return (
        <div className="col-span-3 flex items-center justify-center">
            <Link href="/">
                <BsFillRecordCircleFill />
            </Link>
            <Link href="/">
                <BsHCircleFill />
            </Link>
        </div>
    )
}