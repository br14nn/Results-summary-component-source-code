type WordScoreProps = {
	extraClass: string;
	wordScore: string;
};

export default function (props: WordScoreProps) {
	return (
		<p className={`text-3xl font-bold text-white laptop:text-2xl ${props.extraClass}`}>
			{props.wordScore}
		</p>
	);
}
