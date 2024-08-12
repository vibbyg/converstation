/** @format */

import { ReactNode } from "react";

interface ICard {
  children: ReactNode;
}

export const LandingCard = (props: ICard) => {
  const { children } = props;
  return (
    <div className="flex rounded-[3.125rem] border-4 dark z-10 bg-[var(--bg)] shadow-2xl landscape:max-lg:max-h-screen landscape:max-lg:rounded-[2rem]">
      <div className="m-5 rounded-[3.125rem] border-2 dark border-[var(--grey)] landscape:max-lg:rounded-[2rem] landscape:max-lg:m-3">
        {children}
      </div>
    </div>
  );
};

interface IGameCard extends ICard {
  color?: string;
}

export const GameCard = (props: IGameCard) => {
  const { children, color } = props;
  return (
    <div
      className={`flex items-center justify-center w-[600px] h-[400px] rounded-3xl border-4`}
      style={{ backgroundColor: color || "#fff" }}
    >
      <div
        className={`flex w-[560px] h-[360px] text-center mx-auto rounded-2xl border-2 p-10`}
      >
        {children}
      </div>
    </div>
  );
};
