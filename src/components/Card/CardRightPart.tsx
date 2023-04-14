import CategoryScore from "./CategoryScore";
import ReactionIcon from "../../assets/icon-reaction.svg";
import MemoryIcon from "../../assets/icon-memory.svg";
import VerbalIcon from "../../assets/icon-verbal.svg";
import VisualIcon from "../../assets/icon-visual.svg";
import ContinueButton from "./ContinueButton";

type CardRightProps = {
	reactionScore: number;
	memoryScore: number;
	verbalScore: number;
	visualScore: number;
};

export default function (props: CardRightProps) {
	return (
		<div className="flex h-[60%] w-full flex-col px-10 laptop:h-full laptop:w-1/2">
			<p className="my-10 text-2xl font-bold text-dark-grey-blue">Summary</p>
			<CategoryScore
				icon={ReactionIcon}
				categoryName={"Reaction"}
				categoryScore={props.reactionScore}
				bgColor={"bg-light-red/10"}
				textColor={"text-light-red"}
			/>
			<CategoryScore
				icon={MemoryIcon}
				categoryName={"Memory"}
				categoryScore={props.memoryScore}
				bgColor={"bg-orange-yellow/10"}
				textColor={"text-orange-yellow"}
			/>
			<CategoryScore
				icon={VerbalIcon}
				categoryName={"Verbal"}
				categoryScore={props.verbalScore}
				bgColor={"bg-green-teal/10"}
				textColor={"text-green-teal"}
			/>
			<CategoryScore
				icon={VisualIcon}
				categoryName={"Visual"}
				categoryScore={props.visualScore}
				bgColor={"bg-cobal-blue/10"}
				textColor={"text-cobal-blue"}
			/>
			<ContinueButton />
		</div>
	);
}
