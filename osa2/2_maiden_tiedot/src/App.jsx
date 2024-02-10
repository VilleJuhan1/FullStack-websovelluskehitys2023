import { useState, useEffect } from 'react'
import axios from 'axios'
import FilterCountries from './components/FilterCountries'
import FilterForm from './components/FilterForm'
import Header from './components/Header'
import Sources from './components/Sources'
import './App.css'

// Sovellus hakee maiden tietoja ja antaa käyttäjälle perustiedot hänen haluamastaan maasta
function App() {
  const [countries, setCountries] = useState([]);
  const [filterByInput, setFilter] = useState('')

  // Haetaan tiedot Helsingin yliopiston API-rajapinnasta
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
        setCountries(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  // Järjestellään maat nimen mukaan
  const sortedCountries = countries.slice().sort((a, b) => {
    const nameA = a.name.common.toUpperCase();
    const nameB = b.name.common.toUpperCase();
    return nameA.localeCompare(nameB);
  });

  // Käsitellään muutos teksti-ikkunan inputissa jokaisen merkin jälkeen
  const handleFilterInputChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  // Käsitellään tilanne, jossa käyttäjä valitsee haluamansa maan ja asetetaan maan nimi teksti-ikkunaan
  const changeFilterByClick = (props) => {
    console.log('Yritetään muuttaa filteri:', props)
    setFilter(props)
  }

  // Sovelluksen alakomponentit, jotka näkyvät käyttäjälle
  return (
    <div>
      <Header/>
      <FilterForm value={filterByInput} onChange={handleFilterInputChange} />
      <FilterCountries countries={sortedCountries} filter={filterByInput} onChange={changeFilterByClick}/>
      <Sources/>
    </div>
  )
}

export default App
