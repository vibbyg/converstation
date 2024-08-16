"use client";

import { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { GameCard } from "../common/component/card";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { filterQuestions } from "@/services/questionServices";


interface ICard {
  question: string;
  decks: {
    colour: string;
  }
}

const defaultCard: ICard = {
  question: "ready to start?",
    decks: {
      colour: "#FFF"
    }
}

const Counter: React.FC<{ cur: number; total: number }> = ({ cur, total }) => {
  return (
    <div className="text-3xl font-bold mb-10">
      <span>{cur}</span>/<span className="highlight">{total}</span>
    </div>
  );
};

const generateCards = (questions: ICard[], deckSize: number) => {
  // TODO: right now the cards are just being generated based on randomized index;
  //       deckNames not actually taken into consideration
  let maxSize = questions.length;
  let cardsIdx: number[] = [];
  while (cardsIdx.length < deckSize) {
    let idx = Math.ceil(Math.random() * maxSize);
    if (cardsIdx.indexOf(idx) === -1) cardsIdx.push(idx);
  }
  let cards = cardsIdx.map((idx) => questions[idx]);
  return cards;
};

export default function Game() {
  const [questions, setQuestions] = useState<ICard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();

  // to access deck size and user selected decks, use these consts
  const deckSize = Number(searchParams.get("deckSize"));

  const count = deckSize;

  useEffect(() => {
    fetchQuestionsAndRandomize();
  }, []);

  const fetchQuestionsAndRandomize = async () => {
    try {
      const questionData = await filterQuestions(searchParams.getAll("deckNames"));
      const randomQuestionData = generateCards(questionData || [], deckSize)
      setQuestions(randomQuestionData);
    }
    catch (error: any) {
      console.log('Fetched error: ', error.message)
    }
  }


  const [num, setNum] = useState(0);
  const [curCard, setCurCard] = useState<ICard>(defaultCard);

  // TODO: Make prevCards into a list to be displayed in separate page
  // const prevCards: ICard[] = [];
  let idx = num;
  const nextCard = () => {
    if (num < count) {
      setCurCard(questions[num]);
      // prevCards.push(curCard);
      setNum(num + 1);
    }
  };

  const previousCard = () => {
    if (num - 1 == 0) {
      setCurCard(defaultCard)
    }
    else{
      setCurCard(questions[num - 2]);
    }
    setNum(num - 1);
  };

  return (
    loading ? <div>loading...</div>
    :
    <div className="flex flex-col p-24 items-center">
      <Counter cur={num} total={count} />
      <GameCard color={curCard.decks.colour}>
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
