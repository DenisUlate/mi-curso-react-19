import Counter from "./components/Counter";

function App() {
	return (
		<div className="bg-zinc-900 text-zinc-50 min-h-screen flex flex-col items-center justify-center">
			<header className="mb-8 text-center">
				<h1 className="text-2xl">🎯 Mi Primera App en React 19</h1>
				<p className="text-zinc-600">Practicando componentes, JSX y contenido dinámico</p>
			</header>

			<main className="bg-zinc-800 p-8 rounded-lg shadow-lg">
				<Counter />
			</main>
		</div>
	);
}

export default App;
