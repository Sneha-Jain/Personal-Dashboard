import React, { useEffect, useState } from "react";

let apiUrl = "https://api.openweathermap.org/data/2.5/weather";
let apiKey = "6b8ce41d3276c14d0e12d64799b626ed";
let city = "Bongaigaon, India";

function Weather() {
	const [weather, setWeather] = useState(null);
	useEffect(() => {
		let api = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
		fetch(api).then(response => response.json()).then(data => {
			setWeather(data);
		})
	}, []);

	return (
		<h2>It is currently {weather && weather.main.temp}° in {city}.</h2>
	);
}

export default Weather;