import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface NavHeaderProps {
    text: string;
    path: string;
}

export const NavHeader = (props: NavHeaderProps) => {
    
    return (
        <div className="flex flex-row gap-5 items-center">
            <Link href={props.path}>
                <FaArrowLeft className="text-5xl"/>
            </Link>
            <h1 className="font-medium uppercase text-5xl">
                {props.text}
            </h1>
        </div>
    )
}