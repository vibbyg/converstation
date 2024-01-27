import Link from "next/link";
import { Card } from "./common/component/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Card title="CONVERSTATION" subtitle="catalyze your conversations." />
    </main>
  )
}
