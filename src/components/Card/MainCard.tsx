import { useEffect, useState } from "react";

import CardLeftPart from "./CardLeftPart";
import CardRightPart from "./CardRightPart";

import { data } from "../../../data";

type ScoreDetails = {
	score: number;
	wordScore: string;
	inidividualScores: {
		reactionScore: number;
		memoryScore: number;
		verbalScore: number;
		visualScore: number;
	};
};

export default function () {
	const [scoreDetails, setScoreDetails] = useState<ScoreDetails>({
		score: 0,
		wordScore: "N/A",
		inidividualScores: {
			reactionScore: 0,
			memoryScore: 0,
			verbalScore: 0,
			visualScore: 0,
		},
	});
	const {
		wordScore,
		score,
		inidividualScores: { reactionScore, memoryScore, verbalScore, visualScore },
	} = scoreDetails;

	useEffect(() => {
		const individualScore: number[] = [];
		let finalScore: number;

		data.map((foundData) => {
			individualScore.push(foundData.score);
		});

		finalScore = Math.round((individualScore.reduce((a, b) => a + b, 0) / 400) * 100);

		setScoreDetails({
			score: finalScore,
			wordScore:
				finalScore < 50
					? "Bad"
					: finalScore === 100
					? "Perfect"
					: finalScore > 75
					? "Great"
					: "Good",
			inidividualScores: {
				reactionScore: individualScore[0],
				memoryScore: individualScore[1],
				verbalScore: individualScore[2],
				visualScore: individualScore[3],
			},
		});
	}, []);

	return (
		<div className="flex w-full flex-col overflow-hidden bg-white shadow-test shadow-light-lavender/50 laptop:w-840px laptop:flex-row laptop:rounded-3xl">
			<CardLeftPart scoreVal={score} wordScore={wordScore} />
			<CardRightPart
				reactionScore={reactionScore}
				memoryScore={memoryScore}
				verbalScore={verbalScore}
				visualScore={visualScore}
			/>
		</div>
	);
}
