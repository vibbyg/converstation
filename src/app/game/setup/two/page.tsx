"use client";
import Link from "next/link";
import { FaCheck, FaChevronLeft } from "react-icons/fa";
import { SubHeader } from "@/app/common/component/textStyles";
import { RDeck } from "@/app/common/component/deck";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function GameSetupTwo() {
  const searchParams = useSearchParams();
  console.log(`searchParams: ${searchParams.getAll("deckNames")}`);
  const selectedDeckNames = searchParams.getAll("deckNames");
  const deckSizes = ["5", "15", "25"];
  const [deckSize, setDeckSize] = useState<number>();

  return (
    <div>
      <SubHeader text="2. Choose deck size:" />
      <div className="flex flex-row justify-between">
        <Link href="/game/setup/one" className="flex mt-[20vh]">
          <FaChevronLeft className="text-3xl cursor-pointer" />
        </Link>
        <div className="flex-auto relative mx-40 h-full">
          {deckSizes.map((size, index) => {
            return (
              <div key={index}>
                <RDeck
                  key={index}
                  onCheck={() => {
                    setDeckSize(parseInt(size));
                  }}
                  deckName={size.concat(" cards")}
                  deckColour="var(--bg)"
                  fontColour="var(--colour)"
                  deckPosition={index * 100}
                />
              </div>
            );
          })}
        </div>
        {deckSize && (
          <Link
            href={{
              pathname: "/game",
              query: {
                deckNames: selectedDeckNames,
                deckSize: deckSize,
              },
            }}
            className="flex mt-[20vh] justify-end"
          >
            <FaCheck className="text-3xl cursor-pointer" />
          </Link>
        )}
      </div>
    </div>
  );
}
