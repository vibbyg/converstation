import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";

export const NavBar = () => {
    return (
        <nav className="flex justify-between px-10 py-5">
            <Link href="/">
            <h1 className="uppercase text-xl highlight">
                CONVERSTATION
            </h1>
            </Link>
            <div className="flex text-xl">
                <FaRegSmile />
            </div>
        </nav>
    )
}