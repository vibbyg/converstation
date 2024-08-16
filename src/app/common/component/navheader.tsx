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
                <FaArrowLeft className="lg:text-5xl md:text-4xl"/>
            </Link>
            <h1 className="font-medium uppercase lg:text-5xl md:text-4xl">
                {props.text}
            </h1>
        </div>
    )
}