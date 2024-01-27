import Link from "next/link";
import { NavHeader } from "../common/component/navheader"

export default function Home() {
    return (
      <div className="flex min-h-screen flex-col items-center p-24">
        <NavHeader path="/" text="how this works"/>
        <section>
          <h3>setup</h3>
          <p>lorem ipsum</p>
        </section>
        <section>
          <h3>disclaimer</h3>
          <p>lorem ipsum</p>
        </section>
        <section>
          <h3>version notes</h3>
          <p>lorem ipsum</p>
        </section>
      </div>
    )
}
  