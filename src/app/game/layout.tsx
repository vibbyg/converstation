import { NavBar } from "../common/component/navbar"

export default function GameLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="flex p-4">
        <NavBar/>
        {children}
      </section>
    )
  }