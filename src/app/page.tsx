import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div>
          <div>
            <h1>converstation</h1>
            <span>catalyze your conversations.</span>
          </div>
          <div className="flex flex-col">
            <Link href="/game">start new game</Link>
            <Link href="/help">how does this work?</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
