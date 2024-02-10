import React from 'react';

const DataRenderer = ({ data }) => {
  const temperatureKelvin = data && data.main ? data.main.temp : null
	const temperature = temperatureKelvin !== null ? temperatureKelvin - 273.15 : null
	const weatherIconCode = data && data.weather && data.weather.length > 0 ? data.weather[0].icon : null
	const weatherIconUrl = weatherIconCode ? `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png` : null

	// Palautetaan säätiedot (lämpötila ja sääikoni), mikäli mahdollista. Käsitellään mahdolliset virheet (null)
  return (
    <div>
      {data ? (
        temperature !== null ? (
					<div>
          <p>Temperature: {temperature.toFixed(1)}&#176;C</p>
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