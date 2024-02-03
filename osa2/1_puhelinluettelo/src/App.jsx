import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import FilterForm from './components/FilterForm'
import Headers from './components/Headers'
import NewPersonForm from './components/NewPersonForm'
import { containerStyle } from './components/styles'
import phonebookService from './services/dbService'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('')
  const [filterByInput, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    phonebookService
      .getAll()
      .then(phoneBookData => {
        console.log('promise fulfilled')
        setPersons(phoneBookData)
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

  // Henkilön lisääminen ja erottelu sille lisätäänkö uutta henkilöä vai päivitetäänkö vanha
  const addPerson = (event) => {
    event.preventDefault()

    // Jos henkilö on jo luettelossa, varmistetaan, halutaanko päivittää tiedot
    if (persons.some(person => person.name === newName)) {
      const userConfirmed = window.confirm(`${newName} already exists. Do you want to update their information?`)

      // Mikäli halutaan päivittää tiedot, etsitään päivitettävän henkilön id luettelosta ja toimitetaan se päivityskomponentille
      if (userConfirmed) {
        const existingPerson = persons.find(person => person.name === newName)
        const updatePerson = { name: newName, number: newNumber }

        phonebookService
          .update(existingPerson.id, updatePerson)
            .then(returnedObject => {
              console.log('Henkilö päivitetty', returnedObject)
              setPersons(persons.map(person => (person.id === returnedObject.id ? returnedObject : person)))
              setNewName('')
              setNewNumber('')
            })
      }
    
    // Mikäli henkilöä ei löydy luettelosta, lisätään se
    } else {
      const newPerson = { name: newName, number: newNumber}

      phonebookService
        .create(newPerson)
          .then(returnedObject => {
          console.log('Henkilö lisätty', returnedObject)
          setPersons([...persons, returnedObject])
          setNewName('')
          setNewNumber('')
          })
    }
  }

  // Poistetaan henkilö käyttäen id:tä tunnisteena
  const deletePerson = async (id) => {
    event.preventDefault
    console.log(id)

    const shouldDelete = window.confirm('Are you sure you want to delete this contact?');
    if (shouldDelete) {
      try {
        await phonebookService.deleteContact(id);
        console.log('Henkilö poistettu: ', id)
        setPersons(persons.filter(person => person.id !== id));
      } catch (error) {
        console.error('Virhe poistettaessa henkilöä:', error);
      }
    }
    else {
      console.log('Ketään ei poistettu')
    }

  }

  // Sovelluksen käyttöliittymän runko
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
      <Filter list={persons} 
        filter={filterByInput}
        deletePerson={deletePerson} />
    </div>
  )
}

export default App
