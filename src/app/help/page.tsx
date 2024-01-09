import Link from "next/link";

export default function Home() {
    return (
      <div className="flex min-h-screen flex-col items-center p-24">
        {/* <nav/> */}
        <h1>how this works</h1>
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
        <Link href="/">HOME PAGE</Link>
      </div>
    )
}
  