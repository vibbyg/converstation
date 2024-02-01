interface IDeck {
    deckName: string;
    deckTagline: string;
    deckColor: string;
    deckPosition?: string;
}

export const Deck = ({ deckName, deckTagline, deckColor, deckPosition }: IDeck) => {

    return (
        <div className="flex rounded-3xl border-4 w-96 h-64 -rotate-12 items-center justify-center flex-col gap-3 absolute hover:-translate-x-24 hover:translate-y-12" style={{ backgroundColor: deckColor, left: deckPosition, top: deckPosition }}>
            <h1 className="text-3xl text-[var(--bg)]">
                {deckName.toUpperCase()}
            </h1>
            <h2 className="text-sm text-[var(--bg)]">
                {deckTagline}
            </h2>
        </div>
    )
}