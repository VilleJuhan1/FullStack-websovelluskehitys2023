import React from 'react'

// Suodatin muuntaa sekä maiden nimet että syötteen pieniksi kirjaimiksi ja vertaa niitä keskenään
const FilterCountries = (props) => {
    const filteredCountries=props.countries.filter(country =>
        country.name.common.toLowerCase().includes(props.filter.toLowerCase())
      )

    // Palautetaan joko ilmoitus, että maita ei löytynyt, yksittäisen maan tiedot tai lista suodatetuista maiden nimistä
    if (filteredCountries.length === 0) {
      return <p>No countries found based on criteria.</p>
    } else if (filteredCountries.length === 1) {

    console.log('Valittu maa:', filteredCountries[0].name.common)

    const country = filteredCountries[0]
    const languages = Object.entries(country.languages)

    // Palauttaa yhteen maahan liittyvät tiedot
    // Tämä pitää muuttaa omaksi komponentiksi jossain vaiheessa
      return (
        <div>
          <h1>{country.name.common}</h1>
          <ul className='no-bullets'>
            <li>Capital: {country.capital}</li>
            <li>Area: {country.area} km2</li>
          </ul>
          <h2>Languages</h2>
          <ul className='no-bullets'>
            {languages.map(([code, name]) => (
              <li key={code}>{`${name}`}</li>
            ))}
          </ul>
          <h2>Flag</h2>
          <img
          src={country.flags.png}
          alt={country.flags.alt}
          style={{ maxWidth: '50%', height: 'auto' }}
          />
          <p>
            <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
          </p>
        </div>
      )
    } else {
      return (
        <div>
          <ul className='no-bullets'>
            {filteredCountries.map(country => (
              <li key={country.cca3}>{country.name.common}</li>
            ))}
          </ul>
        </div>
      )
    }
}

export default FilterCountries