import { useState, useEffect } from 'react'
import DataRenderer from './DataRenderer'

// Komponentti, joka keskustelee OpenWeatherMap:n API-rajapinnan kanssa ja hakee säätiedot sijainnin perusteella
const Weather = (props) => {
	const apiKey = import.meta.env.VITE_SOME_KEY // muuttujassa apiKey on nyt käynnistyksessä annettu API-avaimen arvo
	const [weatherData, setWeatherData] = useState('null')
	const lat = props.coordinates.latlng[0]
	const lng = props.coordinates.latlng[1]

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`)
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				const jsonData = await response.json();
				setWeatherData(jsonData);
			} catch (error) {
				console.error('Error fetching weather data:', error)
			}
		}
		fetchData()
	}, [apiKey, lat, lng])

	// Palautetaan FilterCountries-komponentille otsake ja DataRenderin renderöimä paikallissää
	return (
		<div>
			<h2>Weather in {props.capital}</h2>
			<DataRenderer data={weatherData} />
		</div>
	)
}

export default Weather