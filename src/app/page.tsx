import Link from "next/link";
import { LandingCard } from "./common/component/card";
import { FaRegSmile } from "react-icons/fa";

interface IHomeButton {
  buttonText: string;
  path: string;
}

const HomeButton: React.FC<IHomeButton> = ({ buttonText, path }) => {
  return (
    <Link href={path}>
      <button className="p-3 mb-2 rounded-xl border-2 border-[var(--grey)] text-2xl tracking-wider">
        {buttonText}
      </button>
    </Link>
  )
}



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative">
      <div className="w-[45rem] h-[27rem] absolute rounded-3xl origin-top-left -rotate-[21deg] 
        translate-y-24 -translate-x-80 bg-[var(--grey)]" />
      <div className="w-[35rem] h-[27rem] absolute rounded-3xl origin-top-left rotate-[9deg] 
        translate-y-8 translate-x-80 bg-[var(--grey)]" />
      <LandingCard>
        <div className="pr-20 pt-20 pl-20 pb-14">
          <h1 className="font-medium text-7xl pt-10 tracking-wide">CONVERSTATION</h1>
          <h2 className="text-lg mb-7 mt-2 text-center">catalyze your conversations.</h2>
          <div className="flex flex-col items-center">
            <HomeButton buttonText="BEGIN NEW CONVO" path="/game/setup/one" />
            <HomeButton buttonText="HOW DOES THIS WORK?" path="/help" />
          </div>
        </div>
      </LandingCard>
        <h1 className="flex flex-row items-center gap-4 -mb-24 mt-16">
          <FaRegSmile />
          made by vibby + kun, buy us a coffee!
        </h1>
    </main>
  )
}
