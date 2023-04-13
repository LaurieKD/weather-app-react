import Search from "./Search";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";

function App() {
	return (
		<div>
			<div className="container">
				<div className="weather-app">
					<h1>Weather app</h1>

					<Search />
				</div>
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
