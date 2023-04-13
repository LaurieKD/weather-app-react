import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

function Search() {
	let [city, setCity] = useState(null);
	let [loaded, setLoaded] = useState(false);
	let [temperature, setTemperature] = useState(null);
	let [description, setDescription] = useState(null);
	let [humidity, setHumidity] = useState(null);
	let [wind, setWind] = useState(null);
	let [icon, setIcon] = useState(null);

	function handleSubmit(event) {
		event.preventDefault();
		setLoaded(true);
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5201594abea9f3e38b70e65b11a80c24&units=metric`;
		axios.get(url).then(showWeather);
	}

	function updateCity(event) {
		event.preventDefault();
		setCity(event.target.value);
	}

	function updateLoaded(event) {
		event.preventDefault();
		setLoaded(false);
	}

	function showWeather(response) {
		setTemperature(response.data.main.temp);
		setDescription(response.data.weather[0].description);
		setHumidity(response.data.main.humidity);
		setWind(response.data.wind.speed);
		setIcon(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
		console.log(response.data);
	}

	let form = (
		<form
			className="search mb-4"
			onSubmit={handleSubmit}
		>
			<div class="row">
				<div class="col-9">
					<input
						type="input"
						placeholder="Search for a city"
						onChange={updateCity}
						onClick={updateLoaded}
						className="form-control"
					/>
				</div>
				<div class="col-3">
					<input
						type="submit"
						value="Search"
						className="btn btn-primary"
					/>
				</div>
			</div>
		</form>
	);

	if (loaded) {
		return (
			<div>
				{form}
				<p>The current weather in {city}:</p>
				<ul>
					<li>The temperature is {Math.round(temperature)}°C</li>
					<li>Description: {description}</li>
					<li>Humidity: {humidity}%</li>
					<li>Wind: {wind}km/h</li>
					<li>
						<img src={icon} />
					</li>
				</ul>
			</div>
		);
	} else {
		return form;
	}
}

export default Search;
