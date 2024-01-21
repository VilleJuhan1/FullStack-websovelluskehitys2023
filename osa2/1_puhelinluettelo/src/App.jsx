import React, { useState } from 'react'
import Filter from './components/Filter'
import FilterForm from './components/FilterForm'
import Headers from './components/Headers'
import NewPersonForm from './components/NewPersonForm'
import { containerStyle } from './components/styles'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' },
    { name: 'Karri Karvakoipi', phone: '666-123-1234' }
  ])
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('')
  const [filterByInput, setFilter] = useState('')

  const handleAddName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleAddPhone = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
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
      const newPerson = { name: newName, phone: newPhone}
      setPersons([...persons, newPerson])
      setNewName('')
      setNewPhone('')
    }
  }

  return (
    <div style={containerStyle}>
      <Headers style="h1" text="Phonebook" />
      <FilterForm value={filterByInput} onChange={handleFilterInputChange} />
      <Headers style="h2" text="Add a new person and/or number" />
      <NewPersonForm newName={newName} 
        newPhone={newPhone} 
        handleAddName={handleAddName} 
        handleAddPhone={handleAddPhone} 
        addPerson={addPerson} />      
      <Headers style="h2" text="Numbers" />
      <Filter list={persons} filter={filterByInput}/>
    </div>
  )
}

export default App
