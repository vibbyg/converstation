import { NavBar } from "../common/component/navbar"

export default function HelpLayout({
    children, // will be a page or nested layout
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