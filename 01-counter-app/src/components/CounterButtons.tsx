interface CounterButtonsProps {
	onIncrement: () => void;
	onDecrement: () => void;
}

const CounterButtons = ({ onIncrement, onDecrement }: CounterButtonsProps) => {
	return (
		<div className="flex space-x-4">
			<button
				onClick={onIncrement}
				className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
				+ Incrementar
			</button>
			<button onClick={onDecrement} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
				- Decrementar
			</button>
		</div>
	);
};
export default CounterButtons;
