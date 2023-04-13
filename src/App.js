import "./App.css";
import index from "./index";

function App() {
	return (
		<div>
			<div className="container">
				<h1>Weather app</h1>

				<Search />
			</div>
			<div class="footer">
				<footer>
					<a href="https://github.com/LaurieKD/weather-app-react">Open-source code</a> by Laurie Kranendonk
				</footer>
			</div>
		</div>
	);
}

export default App;
