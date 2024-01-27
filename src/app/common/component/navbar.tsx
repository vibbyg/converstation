import { FaRegSmile } from "react-icons/fa";

export const NavBar = () => {
    return (
        <nav  className="flex justify-between">
            <h1 className="uppercase">
                CONVERSTATION
            </h1>
            <div className="flex">
                <FaRegSmile />
            </div>
        </nav>
    )
}