import Link from "next/link";
import { useState } from "react";

export interface ICard {
	title: string;
	subtitle: string;
}
export const Card = (props: ICard) => {
	const { title, subtitle } = props;
	return (
		<div className="flex rounded-[3.125rem] border-[6px] dark">
			<div className="m-5 rounded-[3.125rem] border-2 dark">
				<div className="p-20">
					<h1 className="font-medium text-7xl pt-10">{title}</h1>
					<h2 className="text-xl mb-[3.125rem] text-center">{subtitle}</h2>
					<div className="flex flex-col items-center">
                    <Link href="/game">
						<button className="p-3 mb-2 rounded-xl border-2 dark text-2xl">
							BEGIN NEW CONVO
						</button>
                        </Link>
                        <Link href="/help">
                        <button className="p-3 rounded-xl border-2 dark text-2xl">
							HOW DOES THIS WORK?
						</button>
                        </Link>
					</div>
				</div>
			</div>
		</div>
	);
};
