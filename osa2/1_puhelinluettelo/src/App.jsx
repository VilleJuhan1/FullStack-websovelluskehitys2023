import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '0405556666' }
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('')

  const handleAddName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value);
  };

  const handleAddPhone = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value);
  };  

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
  };

  const Name = (props) => {
    return (
      <div>
      <p>{props.name} {props.phone}</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>name: <input type="text" value={newName} onChange={handleAddName} /></div>
        <div>phone: <input type="text" value={newPhone} onChange={handleAddPhone} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
        {persons.map((person, index) => (
          <Name key={index} name={person.name} phone={person.phone}/>
        ))}
    </div>
  );
};

export default App;
