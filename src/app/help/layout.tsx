import { NavBar } from "../common/component/navbar"

export default function HelpLayout({
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