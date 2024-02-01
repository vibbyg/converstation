import { NavBar } from "../common/component/navbar"

export default function GameLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <NavBar/>
        {children}
      </section>
    )
  }