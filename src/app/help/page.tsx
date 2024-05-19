import { ReactNode } from "react";
import { NavHeader } from "../common/component/navheader"
import { SubHeader } from "../common/component/textStyles"

interface HelpSectionProps {
  header: string;
  children: ReactNode;
}

interface VersionCardsProps {
  version: string;
  children: ReactNode;
}

const HelpSection: React.FC<HelpSectionProps> = ({header, children}) => {
  return(
    <section className="px-5 py-2">
      <SubHeader text={header}/>
      {children}
    </section>
  )
}

const VersionCards: React.FC<VersionCardsProps> = ({version, children}) => {
  return (
    <div className="border-solid border-4 rounded-2xl p-5 w-80 h-40">
      <h3 className="text-l">{version}</h3>
      {children}
    </div>
  )
}

export default function Home() {
    return (
      <div className="flex flex-col py-10 px-20 gap-5">
        <NavHeader path="/" text="how this works"/>
        <HelpSection header="set up">
          <p className="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit or sit amet, consectetur adipiscior sit amet, consectetur adipiscior sit amet, consectetur adipisci or sit amet, consectetur adipisci or sit amet, consectetur adipisci</p>
          <p>Select below to learn more about each deck:</p>
        </HelpSection>
        <HelpSection header="disclaimer">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit or sit amet, consectetur adipiscior sit amet, consectetur adipiscior sit amet, consectetur adipisci or sit amet, consectetur adipisci or sit amet, consectetur adipisci</p>
        </HelpSection>
        <HelpSection header="version notes">
          <div className="flex flex-row gap-5">
            <VersionCards version="0.0">
              <div>work in progress !</div>
            </VersionCards>
            <VersionCards version="0.1">
              <div>HELLO</div>
            </VersionCards>
          </div>
        </HelpSection>
      </div>
    )
}
  