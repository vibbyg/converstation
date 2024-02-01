import { SubHeader } from "@/app/common/component/textStyles"
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

export default function GameSetupTwo() {
    return (
      <div>
        <SubHeader text="1. Create your deck:"/>
        <Link href="/game/setup/two" className="flex mt-[20vh] justify-end">
          <FaChevronRight className="text-3xl"/>
        </Link>
      </div>
    )
}
  