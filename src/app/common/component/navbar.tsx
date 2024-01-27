import { FaRegSmile } from "react-icons/fa";

export const NavBar = () => {
    return (
        <nav className="flex justify-between px-10 py-5">
            <h1 className="uppercase text-xl highlight">
                CONVERSTATION
            </h1>
            <div className="flex text-xl">
                <FaRegSmile />
            </div>
        </nav>
    )
}