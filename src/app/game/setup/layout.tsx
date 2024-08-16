import { NavHeader } from "@/app/common/component/navheader"
import { SubHeader } from "@/app/common/component/textStyles"

export default function GameSetupLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex flex-col py-3 px-20 gap-5 h-fit justify-start">
        <NavHeader path="/" text="New conversation"/>
        {children}
      </div>
    )
}