import { useState, useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import FilterCountries from './components/FilterCountries'
import FilterForm from './components/FilterForm'
import './App.css'

function App() {
  const [countries, setCountries] = useState([]);
  const [filterByInput, setFilter] = useState('')

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

  const handleFilterInputChange = () => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  return (
    <div>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <h1>World's Countries App</h1>
        <h3>Filter by name</h3>
        <FilterForm value={filterByInput} onChange={handleFilterInputChange} />
        <FilterCountries countries={sortedCountries} filter={filterByInput}/>
      </div>
      <p className="read-the-docs">
        Source: <br/>
        <a href="https://studies.cs.helsinki.fi/restcountries/" target="_blank" rel="noopener noreferrer">studies.cs.helsinki.fi/restcountries/</a>
      </p>
    </div>
  )
}

export default App
