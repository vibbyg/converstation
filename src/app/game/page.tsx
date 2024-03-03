'use client'

import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { GameCard } from "../common/component/card";
import Link from "next/link";
import { count } from "console";
import { useSearchParams } from "next/navigation";

interface ICard {
  question: string;
  deck: string;
}

// interface IGame {
//   cards: ICard[];
//   count: number;
// }

const Counter: React.FC<{cur: number, total: number}> = ({cur, total}) => {
  return (
    <div className="text-2xl font-bold mb-5">
      <span>{cur}</span>/<span className="highlight">{total}</span>
    </div>
  )
}

const tempCardList: ICard[] = [
  { question: "What is one song that makes you feel understood?", deck: "wild" },
  { question: "What is a conspiracy theory you think could be true?", deck: "homie" },
  { question: "What is one destructive trait you know you possess and wish you didn’t?", deck: "wild" },
  { question: "What do we have in this relationship that you never thought was possible?", deck: "couple" },
  { question: "What have I always accepted to be true but turned out to be false?", deck: "self" }
];

const deckColorMap = new Map<string, string>([
  ["default", "#FFF"],
  ["mild", "#EE7485"],
  ["wild", "#FFA87D"],
  ["couple", "#FFD8C4"],
  ["homie", "#8FB2F6"],
  ["self", "#A5E1C8"]
]);

export default function Game() {
  const searchParams = useSearchParams();

  // to access deck size and user selected decks, use these consts
  const deckSize = Number(searchParams.get('deckSize'));
  const deckNames = searchParams.getAll('deckNames');

  // const {cards, count} = gameDetails
  const cards = tempCardList
  const count = deckSize;

  const [num, setNum] = useState(0)
  const [curCard, setCurCard] = useState<ICard>({question: "ready to start?", deck: "default"})

  const prevCards: ICard[]= []
  let idx = num
  const nextCard = () => {
    if (idx < count) {
      let card = cards[idx]
      prevCards.push(curCard)
      setCurCard(card)
      idx += 1
      setNum(idx)
    }
  }

    return (
      <div className="flex flex-col p-24 items-center">
        <Counter cur={num} total={count}/>
        <GameCard color={deckColorMap.get(curCard.deck)}>
          <div 
            className="flex h-full w-full items-center justify-center"
            onClick={nextCard}
            >
            {curCard.question}
          </div>
        </GameCard>
        <div 
          className="absolute top-[50vh] right-20 justify-end"
          onClick={nextCard}
          >
          <FaChevronRight className="text-3xl"/>
        </div>
        <div 
          className="absolute top-[50vh] left-20 justify-end"
          onClick={nextCard}
          >
          <Link href="/game/history">
            PREV
          </Link>
        </div>
      </div>
    )
}
  