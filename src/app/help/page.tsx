/** @format */

import { ReactNode } from "react";
import { NavHeader } from "../common/component/navheader";
import { SubHeader } from "../common/component/textStyles";

interface HelpSectionProps {
  header?: string;
  children: ReactNode;
}

interface VersionCardsProps {
  version: string;
  children: ReactNode;
}

const HelpSection: React.FC<HelpSectionProps> = ({ header = "", children }) => {
  return (
    <section className="flex flex-col px-5 py-2 gap-2">
      <SubHeader text={header} />
      {children}
    </section>
  );
};

const DeckDescriptions = () => {
  // TO DO: write detailed descriptions for each deck & create interactive interface

  return (
    <div className="px-5 py-10 my-10 w-full rounded-lg border-4 opacity-50">
      Coming soon... (｡•́︿•̀｡)
    </div>
  );
};

const VersionCards: React.FC<VersionCardsProps> = ({ version, children }) => {
  return (
    <div className="flex flex-col gap-1 border-solid border-4 rounded-2xl p-5 w-1/4 max-h-1/4 overflow-scroll text-sm">
      <h3 className="text-xl font-bold">{version}</h3>
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col py-10 px-20 gap-5">
      <NavHeader path="/" text="how this works" />
      <HelpSection header="set up">
        <p className="pb-2">
          There are only two things you need to do to start a new Convo: select
          which decks of conversation prompts you would like to include, and the
          number of cards (each card is a conversation prompt) that you would
          like to go through.
        </p>
        <p>
          Whether you are trying to break the ice, deepen the friendship, or
          engage in self-reflection, there is a deck for every vibe. Click
          through the list to learn more about each specific deck:
        </p>
        <DeckDescriptions />
        <p>
          After these steps, your Convo is ready to begin! Different prompts
          from your selected decks will be shuffled throughout the deck, and you
          will know which card the deck is from by their colours.
        </p>
        <p>
          You will be presented with one prompt at a time. Click the arrow to
          move onto the next prompt whenever you are done with the current one.
          Linger as long as you wish on each prompt, and skip any question that
          does not resonate. If you ever wish to revisit a prompt from earlier,
          simply click on the “previous cards” deck for a list of all the
          prompts you have gone through in the current convo.
        </p>
      </HelpSection>
      <HelpSection header="disclaimer">
        <p>
          We owe inspiration to so many sources and take no credit for the
          originality of the idea! In particular, we were hugely inspired by the{" "}
          <a
            className="text-red-400 hover:italic"
            href="https://www.werenotreallystrangers.com/"
            target="_blank"
          >
            We're Not Really Strangers
          </a>{" "}
          card game.
        </p>
      </HelpSection>
      <HelpSection header="version notes">
        <div className="flex flex-row gap-5">
          <VersionCards version="1.0">
            <p>This is the first version of the app!</p>
            <p>
              If you are experiencing any issues, or have any feedbacks on how
              we could improve, we would love to hear from you! Send us a
              message{" "}
              <a
                href="mailto:zkzhu@uwaterloo.ca"
                target="_blank"
                className="text-blue-400"
              >
                here
              </a>
              .
            </p>
          </VersionCards>
        </div>
      </HelpSection>
    </div>
  );
}
