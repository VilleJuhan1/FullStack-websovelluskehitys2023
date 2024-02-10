import React from 'react';

// Käsitellään OpenWeatherMap:sta tuleva json-data ja renderöidään se sovellukselle käyttäjäystävälliseen muotoon
const DataRenderer = ({ data }) => {
  const temperatureKelvin = data && data.main ? data.main.temp : null
	const temperature = temperatureKelvin !== null ? temperatureKelvin - 273.15 : null
	const weatherIconCode = data && data.weather && data.weather.length > 0 ? data.weather[0].icon : null
	const weatherIconUrl = weatherIconCode ? `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png` : null
	const wind = data && data.wind ? data.wind.speed : null

	// Palautetaan säätiedot (lämpötila ja sääikoni), mikäli mahdollista. Käsitellään mahdolliset virheet (null)
  return (
    <div>
      {data ? (
        temperature !== null ? (
					<div>
						<ul className='no-bullets'>
							<li>Temperature: {temperature.toFixed(1)}&#176;C</li>
							<li>Wind: {wind} m/s</li>
          	</ul>
						{weatherIconUrl && <img src={weatherIconUrl} alt="Weather Icon" />}
					</div>
        ) : (
          <p>No temperature data available</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};


export default DataRenderer;