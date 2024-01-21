import React, { useState } from 'react'
import Filter from './components/Filter'

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
    setNewName(event.target.value);
  };

  const handleAddPhone = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value);
  };  

  const handleFilterInputChange = () => {
    console.log(event.target.value)
    setFilter(event.target.value);
  }
  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook!`);
    } else {
      const newPerson = { name: newName, phone: newPhone};
      setPersons([...persons, newPerson]);
      setNewName('');
      setNewPhone('');
    }
  }

  const Name = (props) => {
    return (
      <div>
      <p>{props.name} {props.phone}</p>
      </div>
    )
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filterByInput.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter: <input type="text" value={filterByInput} onChange={handleFilterInputChange} />
        </div>
      </form>
      <h2>Add a new person and/or number</h2>
      <form onSubmit={addPerson}>
        <div>name: <input type="text" value={newName} onChange={handleAddName} /></div>
        <div>phone: <input type="text" value={newPhone} onChange={handleAddPhone} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
        {persons.map((person, index) => (
          <Name key={index} name={person.name} phone={person.phone}/>
        ))}
      <h2>Filtered</h2>
        {filteredPersons.map((person, index) => (
            <li key={index}>{person.name} - {person.phone}</li>
          ))}
        <Filter list={persons} filter={filterByInput}/>
    </div>
  );
};

export default App;
