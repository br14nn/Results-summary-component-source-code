type ScoreNumberProps = {
	extraClass: string;
	scoreVal: number;
};

export default function (props: ScoreNumberProps) {
	return (
		<div
			className={`flex h-36 w-36 flex-col items-center justify-center rounded-[100%] bg-gradient-to-b from-violet-blue to-persian-blue laptop:h-52 laptop:w-52 ${props.extraClass}`}
		>
			<p className="text-6xl font-extrabold text-white laptop:text-7xl">{props.scoreVal}</p>
			<p className=" text-base text-light-lavender laptop:text-lg">of 100</p>
		</div>
	);
}
