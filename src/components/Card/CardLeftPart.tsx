import ScoreNumber from "./ScoreNumber";
import WordScore from "./WordScore";
import ScoreDetails from "./ScoreDetails";

type CardLeftPartProps = {
	scoreVal: number;
	wordScore: string;
};

export default function (props: CardLeftPartProps) {
	return (
		<div className="flex h-[40%] w-full flex-col items-center rounded-b-3xl bg-gradient-to-b from-light-slate-blue to-light-royal-blue pb-6 pt-4 laptop:h-full laptop:min-h-[500px] laptop:w-1/2 laptop:rounded-r-3xl laptop:pb-0 laptop:pt-0">
			<p className="mb-4 text-xl font-bold text-light-lavender laptop:my-10 laptop:text-2xl">
				Your Result
			</p>
			<ScoreNumber extraClass={"mb-4 laptop:mb-10"} scoreVal={props.scoreVal} />
			<WordScore extraClass={"mb-2 laptop:mb-5"} wordScore={props.wordScore} />
			<ScoreDetails extraClass={"laptop:mb-14"} scoreVal={props.scoreVal} />
		</div>
	);
}
