import Dashboard from "./components/Dashboard";
import Cards from "./components/Cards";
import "./App.css";

export default function App() {
	return (
		<main className="App">
			<section className="glass">
				<Dashboard />
				<section className="games">
					<div className="status">
						<h1>Active Games</h1>
						<input type="text" />
					</div>
					<Cards />
				</section>
			</section>
			<div className="circle1"></div>
			<div className="circle2"></div>
		</main>
	);
}
