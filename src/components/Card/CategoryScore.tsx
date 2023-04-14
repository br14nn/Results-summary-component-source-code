type CategoryScoreProps = {
	bgColor: string;
	textColor: string;
	icon: string;
	categoryName: string;
	categoryScore: number;
};

export default function (props: CategoryScoreProps) {
	return (
		<div className={`mb-4 flex flex-row items-center rounded-xl p-4 ${props.bgColor}`}>
			<img className="mr-2" src={props.icon} alt="Reaction Icon" />
			<p className={`text-center font-medium ${props.textColor}`}>{props.categoryName}</p>
			<div className="ml-auto flex flex-row items-center">
				<p className="font-bold text-dark-grey-blue">{props.categoryScore}</p>
				<p className="mx-2 font-bold text-dark-grey-blue/50">/</p>
				<p className="font-bold text-dark-grey-blue/50">100</p>
			</div>
		</div>
	);
}
