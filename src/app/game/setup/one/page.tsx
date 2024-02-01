import { SubHeader } from "@/app/common/component/textStyles"
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { Deck } from "@/app/common/component/deck";

export default function GameSetupTwo() {
    return (
      <div>
        <SubHeader text="1. Create your deck:"/>
        <Link href="/game/setup/two" className="flex mt-[20vh] justify-between">
          <Deck deckName="For the self" deckTagline="for those heart to hearts with the homies" deckColor="#A5E1C8" deckPosition="5%"/>
          <Deck deckName="For the couples" deckTagline="for those heart to hearts with the homies" deckColor="#FFD8C4" deckPosition="10%"/>
          <Deck deckName="Classic - Wild" deckTagline="for those heart to hearts with the homies" deckColor="#FFA87D" deckPosition="15%"/>
          <Deck deckName="Classic - Mild" deckTagline="for those heart to hearts with the homies" deckColor="#EE7485" deckPosition="20%"/>
          <Deck deckName="For the homies" deckTagline="for those heart to hearts with the homies" deckColor="#8FB2F6" deckPosition="25%"/>
          <FaChevronRight className="text-3xl"/>
        </Link>
      </div>
    )
}
  