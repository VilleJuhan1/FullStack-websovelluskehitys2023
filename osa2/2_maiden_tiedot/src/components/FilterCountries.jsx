import React from 'react'
import Weather from './Weather'

// Palautetaan sovelluksen varsinainen sisältö (ilmoitus, lista maita tai yhden maan tiedot)
const FilterCountries = (props) => {
    console.log(props)
    // Käsitellään kaikki maat ja järjestetään ne aakkosittain
    const filteredCountries=props.countries.filter(country =>
        country.name.common.toLowerCase().includes(props.filter.toLowerCase())
      )
    
    // Käsitellään painikkeen klikkaus eli tilanne, jossa käyttäjä valitsee maan listalta hiirellä
    // Siirretään klikatun maan nimi suoraan filteriin niin, että maan tiedot tulevat näkyville
    const handleClick = (country) => {
      props.onChange(country)
    }

    // Verrataan hakukriteerejä listaan maita
    // Maita ei löytynyt hakukriteereillä
    if (filteredCountries.length === 0) {
      return <p>No countries found based on criteria</p>

    // Maita on liikaa, yli 10
    } else if (filteredCountries.length >= 10) {
      return <p>Try to narrow down your search a bit more</p>

    // Vain yksi maa täyttää hakuehdot, joten tuodaan halutut tiedot sovellukseen
    } else if (filteredCountries.length === 1) {
      console.log('Valittu maa:', filteredCountries[0].name.common)
      const country = filteredCountries[0]
      const languages = Object.entries(country.languages)

      // Palauttaa yhteen maahan liittyvät tiedot
      return (
        <div>
          <h1>{country.name.common}</h1>
          <img
          src={country.flags.png}
          alt={country.flags.alt}
          style={{ maxWidth: '50%', height: 'auto' }}
          />
          <ul className='no-bullets'>
            <li>Capital: {country.capital}</li>
            <li>Area: {country.area} km2</li>
            <li>Population: {country.population}</li>
          </ul>
          <h2>Languages</h2>
          <ul className='no-bullets'>
            {languages.map(([code, name]) => (
              <li key={code}>{`${name}`}</li>
            ))}
          </ul>
          <Weather capital={country.capital} coordinates={country.capitalInfo} />
          <p><a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">Open in Google Maps</a></p>
        </div>
      )
    
    // Mikäli mikään edellä olevista ei toteudu, tulostetaan klikattava lista, jossa on maat, joihin kriteerit sopivat 
    } else {
      return (
        <div>
          <h3>Matches:</h3>
          <ul className='no-bullets'>
            {filteredCountries.map(country => (
              <li key={country.cca3}>
                <a href="#" onClick={() => { handleClick(country.name.common) }}>
                {country.name.common}<br/>
              </a>
            </li>
            ))}
          </ul>
        </div>
      )
    }
}

export default FilterCountries