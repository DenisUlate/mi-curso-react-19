interface CounterDisplayProps {
	count: number;
}

const CounterDisplay = ({ count }: CounterDisplayProps) => {
	return (
		<div className="text-2xl mb-4">
			<h2>Contador: {count}</h2>
		</div>
	);
};
export default CounterDisplay;
