import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";

const Counter = () => {
	const [count, setCount] = useState(0);

	const handleIncrement = () => setCount(count + 1);
	const handleDecrement = () => setCount(count - 1);

	return (
		<div className="flex flex-col items-center">
			<CounterDisplay count={count} />
			<CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
		</div>
	);
};
export default Counter;
