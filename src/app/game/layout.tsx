import { NavBar } from "../common/component/navbar"
import Link from "next/link";
import { FaRegQuestionCircle } from "react-icons/fa";

export default function GameLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="h-[calc(100dvh)] w-[calc(100dvw)]">
        <NavBar/>
        {children}
        <Link href="/help" className="absolute bottom-5 right-10 text-xl">
          <FaRegQuestionCircle/>
        </Link>
      </section>
    )
  }