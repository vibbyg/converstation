"use client";

import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { GameCard } from "../common/component/card";
import { questionsData } from "../data/questionsData";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const Counter: React.FC<{ cur: number; total: number }> = ({ cur, total }) => {
  return (
    <div className="text-3xl font-bold mb-10">
      <span>{cur}</span>/<span className="highlight">{total}</span>
    </div>
  );
};

interface ICard {
  deck: number;
  question: string;
}

const deckColorMap = new Map<number, string>([
  [0, "#FFF"],
  [1, "#EE7485"], // mild
  [2, "#FFA87D"], // wild
  [3, "#FFD8C4"], // couples
  [4, "#8FB2F6"], // homies
  [5, "#A5E1C8"], // self
]);

const generateCards = (deckSize: number, deckNames: string[]) => {
  // TODO: right now the cards are just being generated based on randomized index;
  //       deckNames not actually taken into consideration
  console.log(deckNames);
  let maxSize = questionsData.length;
  let cardsIdx: number[] = [];
  while (cardsIdx.length < deckSize) {
    let idx = Math.ceil(Math.random() * maxSize);
    if (cardsIdx.indexOf(idx) === -1) cardsIdx.push(idx);
  }
  let cards = cardsIdx.map((idx) => questionsData[idx]);
  return cards;
};

export default function Game() {
  const searchParams = useSearchParams();

  // to access deck size and user selected decks, use these consts
  const deckSize = Number(searchParams.get("deckSize"));
  const deckNames = searchParams.getAll("deckNames");

  const cards = generateCards(deckSize, deckNames);
  const count = deckSize;

  const [num, setNum] = useState(0);
  const [curCard, setCurCard] = useState<ICard>({
    deck: 0,
    question: "ready to start?",
  });

  const [prevCard, setPrevCard] = useState<ICard | null>(null);

  // TODO: Make prevCards into a list to be displayed in separate page
  // const prevCards: ICard[] = [];
  let idx = num;
  const nextCard = () => {
    if (idx < count) {
      // TODO: again, right now the deck # is merely a placeholder
      let card: ICard = {
        deck: (idx % 4) + 1,
        question: cards[idx].question,
      };
      setPrevCard(curCard);
      // prevCards.push(curCard);
      setCurCard(card);
      idx += 1;
      setNum(idx);
    }
  };

  const previousCard = () => {
    if (prevCard) {
      setCurCard(prevCard);
      idx -= 1;
      setNum(idx);
    }
  };

  return (
    <div className="flex flex-col p-24 items-center">
      <Counter cur={num} total={count} />
      <GameCard color={deckColorMap.get(curCard.deck)}>
        <div
          className="flex h-full w-full items-center p-10 justify-center"
          onClick={nextCard}
        >
          <h2 className="text-xl font-bold">{curCard.question}</h2>
        </div>
      </GameCard>
      <div
        className="absolute top-[50vh] right-20 justify-end"
        onClick={nextCard}
      >
        {idx < deckSize ? (
          <FaChevronRight className="text-3xl cursor-pointer" />
        ) : (
          <Link href="/">
            <button className="p-3 mb-2 rounded-xl border-2 border-[var(--grey)] text-lg tracking-wider">
              NEW CONVO
            </button>
          </Link>
        )}
      </div>
      {idx > 0 && (
        <div
          className="absolute top-[50vh] left-20 justify-end"
          onClick={previousCard}
        >
          <FaChevronLeft className="text-3xl cursor-pointer" />
          {/* <Link href="/game/history">PREV</Link> */}
        </div>
      )}
    </div>
  );
}
