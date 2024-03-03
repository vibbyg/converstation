'use client'
import Link from "next/link";
import { FaCheck, FaChevronLeft } from "react-icons/fa";
import { SubHeader } from "@/app/common/component/textStyles"
import { useSearchParams } from "next/navigation";



export default function GameSetupTwo() {
  const searchParams = useSearchParams();
  console.log(`searchParams: ${searchParams.getAll('deckNames')}`)
  const selectedDeckNames = searchParams.getAll('deckNames');
  const selectedDeckSize = 10;

    return (
      <div>
        <SubHeader text="2. Choose deck size"/>
        <div className="flex flex-row justify-between">
          <Link href="/game/setup/one" className="flex mt-[20vh] justify-start">
            <FaChevronLeft className="text-3xl"/>
          </Link>
          <Link href={{
            pathname: "/game",
            query: {
              deckNames: selectedDeckNames,
              deckSize: selectedDeckSize
            }
            }} className="flex mt-[20vh] justify-end">
            <FaCheck className="text-3xl"/>
          </Link>
        </div>
      </div>
    )
}
  