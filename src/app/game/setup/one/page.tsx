"use client";
import { SubHeader } from "@/app/common/component/textStyles";
import { FaChevronRight, FaRegSmile } from "react-icons/fa";
import Link from "next/link";
import { IDeck, CDeck } from "@/app/common/component/deck";
import { useState } from "react";
import { gameDecks } from "../../../data/gameData";
import Router from "next/router";

export default function GameSetupOne() {
  const decks: IDeck[] = gameDecks;
  const [decksSelected, setDecksSelected] = useState<string[]>([]);

  const onDeckClick = (deckName: string) => {
    const containsDeck = decksSelected.filter((deck) => {
      console.log(
        `deck: ${deck}, deckName: ${deckName}, match?: ${deck === deckName}`
      );
      return deck === deckName;
    });
    console.log(`containsDeck: ${JSON.stringify(containsDeck)}`);
    containsDeck.length == 0
      ? setDecksSelected([...decksSelected, deckName])
      : setDecksSelected(decksSelected.filter((deck) => deck !== deckName));
    console.log(`decksSelected: ${JSON.stringify(decksSelected)}`);
  };

  return (
    <div>
      <SubHeader text="1. Create your deck:" />
      <div className="flex flex-row justify-between">
        <div className="flex mt-[20vh]">
          <FaRegSmile className="text-3xl" />
        </div>
        <div className="flex-auto relative mx-40 h-full">
          {decks.map((deck, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  onDeckClick(deck.deckName ?? "");
                }}
              >
                <CDeck
                  key={index}
                  deckName={deck.deckName}
                  deckColour={deck.deckColour}
                  deckTagline={deck.deckTagline}
                  deckPosition={index * 30}
                />
              </div>
            );
          })}
        </div>
        <Link
          href={{
            pathname: "/game/setup/two",
            query: {
              deckNames: decksSelected,
            },
          }}
          className="flex mt-[20vh]"
        >
          <FaChevronRight className="text-3xl" />
        </Link>
      </div>
    </div>
  );
}
