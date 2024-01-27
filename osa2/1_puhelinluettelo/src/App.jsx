import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import FilterForm from './components/FilterForm'
import Headers from './components/Headers'
import NewPersonForm from './components/NewPersonForm'
import { containerStyle } from './components/styles'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('')
  const [filterByInput, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')
  console.log(persons)

  const handleAddName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleAddNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterInputChange = () => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }
  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook!`)
    } else {
      const newPerson = { name: newName, number: newNumber}
      setPersons([...persons, newPerson])
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div style={containerStyle}>
      <Headers style="h1" text="Phonebook" />
      <FilterForm value={filterByInput} onChange={handleFilterInputChange} />
      <Headers style="h2" text="Add a new person and/or number" />
      <NewPersonForm newName={newName} 
        newNumber={newNumber} 
        handleAddName={handleAddName} 
        handleAddNumber={handleAddNumber} 
        addPerson={addPerson} />      
      <Headers style="h2" text="Numbers" />
      <Filter list={persons} filter={filterByInput}/>
    </div>
  )
}

export default App
