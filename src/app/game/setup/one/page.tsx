'use client'
import { SubHeader } from "@/app/common/component/textStyles"
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { IDeck, Deck } from "@/app/common/component/deck";
import { useState } from "react";
import { gameDecks } from '../../../constants/gameData';
import Router from "next/router";


export default function GameSetupOne() {
  const decks: IDeck[] = gameDecks;
  const [decksSelected, setDecksSelected] = useState<string[]>([]);

  const onDeckClick = (deckName: string) => {
    const containsDeck = decksSelected.filter((deck) => {
      console.log(`deck: ${deck}, deckName: ${deckName}, match?: ${deck === deckName}`)
      return deck === deckName
    });
    console.log(`containsDeck: ${JSON.stringify(containsDeck)}`)
    containsDeck.length == 0 ? setDecksSelected([...decksSelected, deckName]) : setDecksSelected(decksSelected.filter((deck => deck !== deckName)));
    console.log(`decksSelected: ${JSON.stringify(decksSelected)}`);
  };


  return (
    <div className="flex flex-col mt-[3vh]">
      <SubHeader text="1. Create your deck:" />
      <div className="flex flex-row relative justify-between items-center">
        <div>
          {decks.map((deck, index) => {
            return <div key={index} onClick={() => {onDeckClick(deck.deckName ?? "")}}><Deck key={index} deckName={deck.deckName} deckColour={deck.deckColour} deckTagline={deck.deckTagline} deckPosition={index * 30}  /></div>
          })}
        </div>
        <Link href={{
          pathname: "/game/setup/two",
          query: {
            deckNames: decksSelected
         }}} className="flex mt-[1vh] justify-between">
          <FaChevronRight className="text-3xl" />
        </Link>
      </div>
    </div>
  )
}
