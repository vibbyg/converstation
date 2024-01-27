import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface NavHeaderProps {
    text: string;
    path: string;
}

export const NavHeader = (props: NavHeaderProps) => {
    return (
        <div className="flex flex-row">
            <Link href={props.path}>
                <FaArrowLeft className="text-2xl"/>
            </Link>
            <h1 className="font-medium uppercase text-2xl">
                {props.text}
            </h1>
        </div>
    )
}