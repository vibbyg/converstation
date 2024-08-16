"use client";
import { SubHeader } from "@/app/common/component/textStyles";
import { FaChevronRight, FaRegSmile } from "react-icons/fa";
import Link from "next/link";
import { IDeck, CDeck } from "@/app/common/component/deck";
import { useEffect, useState } from "react";
import { gameDecks } from "../../../data/gameData";
import { getDecks } from "@/services/deckServices";

export default function GameSetupOne() {
  const [decks, setDecks] = useState<IDeck[]>([]);

  useEffect(() => {
    fetchDecks();
  }, []);

  const fetchDecks = async () => {
    try {
      const deckData = await getDecks();
      const wrappedDeckData = deckData?.map((deck, index) => {
        return {
          deckName: deck.name,
          deckTagline: deck.tagline,
          deckColour: deck.colour,
          deckID: index,
          deckPosition: index,
          deckSelected: false
        }
      }) as IDeck[];
      setDecks(wrappedDeckData || gameDecks);
    }
    catch (error: any) {
      console.log('Fetched error: ', error.message)
    }
  }
  const [decksSelected, setDecksSelected] = useState<string[]>([]);

  const onDeckClick = (deckName: string) => {
    decks.forEach((deck) => {
      if(deck.deckName === deckName){
        deck.deckSelected = !deck.deckSelected
      }
    })
    const containsDeck = decksSelected.filter((deck) => {
      return deck === deckName;
    });
    containsDeck.length == 0
      ? setDecksSelected([...decksSelected, deckName])
      : setDecksSelected(decksSelected.filter((deck) => deck !== deckName));
  };

  return (
    <div>
      <SubHeader text="1. Create your deck:" />
      <div className="flex flex-row justify-between self-center">
        <div className="flex mt-20 highlight">
          <FaRegSmile className="lg:text-3xl md:text-2xl" />
        </div>
        <div className="flex-auto relative md:mx-[10%] md:my-[3%] lg:mx-[15%] lg:my-[5%] h-full">
          {decks.map((deck, index) => {
            return (
                <CDeck
                  onCheck={onDeckClick}
                  key={index}
                  deckName={deck.deckName}
                  deckColour={deck.deckColour}
                  deckTagline={deck.deckTagline}
                  deckPosition={index * 30}
                  deckSelected={deck.deckSelected}
                />
            );
          })}
        </div>
        {decksSelected.length > 0 && (
          <Link
            href={{
              pathname: "/game/setup/two",
              query: {
                deckNames: decksSelected,
              },
            }}
            className="flex mt-20"
          >
            <FaChevronRight className="text-3xl z-0" />
          </Link>
        )}
      </div>
    </div>
  );
}
