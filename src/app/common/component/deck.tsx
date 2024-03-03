'use client'
import { useState } from "react";

export interface IDeck {
    deckName: string;
    deckTagline: string;
    deckColour: string;
    deckPosition?: string | number;
    deckID?: number;
    onClick?: () => void;
}

export const Deck = ({ deckName, deckTagline, deckColour, deckPosition, onClick }: IDeck) => {
    const [checked, setChecked] = useState(false);

    return (
        <div className="flex rounded-3xl border-4 w-96 h-64 -rotate-12 items-center justify-center flex-col gap-3 absolute" style={{ backgroundColor: deckColour, left: deckPosition, top: deckPosition }}>
            <input type="checkbox" className="appearance-none w-4 h-4 border-2 rounded-full checked:border-[var(--grey)]" />
            <h1 className="text-3xl text-[var(--bg)]">
                {deckName.toUpperCase()}
            </h1>
            <h2 className="text-sm text-[var(--bg)]">
                {deckTagline}
            </h2>
        </div>
    )
}