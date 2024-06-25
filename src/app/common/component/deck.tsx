"use client";

export interface IDeck {
  deckName: string;
  deckTagline?: string;
  deckColour?: string;
  fontColour?: string;
  deckPosition: number;
  deckSelected?: boolean;
  deckID?: number;
  onCheck?: (deck: string) => void;
}

export const CDeck = ({
  onCheck,
  deckName,
  deckTagline,
  deckColour,
  fontColour,
  deckPosition,
  deckSelected
}: IDeck) => {
  const xPosition = deckPosition * 4;
  const yPosition = deckPosition;

  return (
    <div
      className="flex rounded-3xl border-2 w-96 h-64 -rotate-12 items-center justify-start flex-col absolute 
      transition-all duration-500 hover:-translate-x-[25%] hover:-translate-y-[10%] hover:cursor-pointer"
      onClick={() => onCheck ? onCheck(deckName) : {}}
      style={{ backgroundColor: deckColour, left: xPosition, top: yPosition }}
    >
      <input
        type="checkbox"
        checked={deckSelected}
        readOnly
        className="absolute peer top-4 left-4 appearance-none cursor-pointer w-8 h-8 border-2 rounded-full bg-[var(--bg)]"
      />
      <svg
        className="absolute top-4 left-5 w-6 h-6 mt-1 hidden peer-checked:block pointer-events-none"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--grey)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <h1
        className="text-3xl mt-10 mb-1 font-bold"
        style={{ color: fontColour ? fontColour : "var(--bg)" }}
      >
        {deckName.toUpperCase()}
      </h1>
      <h2 className="text-xs text-[var(--bg)]">{deckTagline}</h2>
    </div>
  );
};

export const RDeck = ({
  onCheck,
  deckName,
  deckTagline,
  fontColour,
  deckPosition,
  deckSelected
}: IDeck) => {
  const xPosition = deckPosition * 3;
  const yPosition = deckPosition;

  return (
    <div
      className="flex rounded-3xl border-2 w-96 h-64 -rotate-12 items-center justify-start flex-col absolute 
      transition-all duration-500 bg-[var(--bg)] hover:bg-[var(--grey)] hover:cursor-pointer"
      style={{ left: xPosition, top: yPosition }}
      onClick={() => onCheck ? onCheck(deckName) : {}}
    >
      <input
        readOnly
        checked={deckSelected}
        name="option"
        type="radio"
        className="absolute peer top-4 left-4 appearance-none cursor-pointer w-8 h-8 border-2 rounded-full bg-[var(--bg)]"
      />
      <span className="transition-opacity opacity-0 absolute top-4 left-9 w-6 h-6 mt-2 pointer-events-none -translate-x-2/4 peer-checked:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
        </svg>
      </span>
      <h1
        className="text-3xl mt-10 mb-1 font-bold"
        style={{ color: fontColour ? fontColour : "var(--bg)" }}
      >
        {deckName.toUpperCase()}
      </h1>
      <h2 className="text-xs">{deckTagline}</h2>
    </div>
  );
};
