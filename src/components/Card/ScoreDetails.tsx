type ScoreDetailsProps = {
	extraClass: string;
	scoreVal: number;
};

export default function (props: ScoreDetailsProps) {
	return (
		<div className={`w-[75%] laptop:w-[65%] ${props.extraClass}`}>
			<p className="text-center text-xl text-light-lavender">
				You scored higher than {props.scoreVal}% of the people who have taken these tests.
			</p>
		</div>
	);
}
