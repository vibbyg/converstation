import Link from "next/link";
import { ReactNode } from "react";

export interface ICard {
	children: ReactNode;
}
export const Card = (props: ICard) => {
	const { children } = props;
	return (
		<div className="flex rounded-[3.125rem] border-4 dark z-10 bg-[var(--bg)] shadow-2xl">
			<div className="m-5 rounded-[3.125rem] border-2 dark border-[var(--grey)]">
				{children}
			</div>
		</div>
	);
};
