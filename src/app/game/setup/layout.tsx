import { NavHeader } from "@/app/common/component/navheader"
import { SubHeader } from "@/app/common/component/textStyles"

export default function GameSetupLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex min-h-screen flex-col py-10 px-20 gap-5">
        <NavHeader path="/" text="New conversation"/>
        {children}
      </div>
    )
}