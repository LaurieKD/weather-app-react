import logo from "./logo.svg";
import "./App.css";
import { Rings } from "react-loader-spinner";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img
					src={logo}
					className="App-logo"
					alt="logo"
				/>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>

				<Rings
					height="150"
					width="150"
					color="#FFFFFF"
					radius="2"
					wrapperStyle={{}}
					wrapperClass=""
					visible={true}
					ariaLabel="rings-loading"
				/>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
