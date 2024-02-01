import Link from "next/link";
import { FaCheck, FaChevronLeft } from "react-icons/fa";
import { SubHeader } from "@/app/common/component/textStyles"

export default function GameSetupOne() {
    return (
      <div>
        <SubHeader text="2. Choose deck size"/>
        <div className="flex flex-row justify-between">
          <Link href="/game/setup/one" className="flex mt-[20vh] justify-start">
            <FaChevronLeft className="text-3xl"/>
          </Link>
          <Link href="/game" className="flex mt-[20vh] justify-end">
            <FaCheck className="text-3xl"/>
          </Link>
        </div>
      </div>
    )
}
  