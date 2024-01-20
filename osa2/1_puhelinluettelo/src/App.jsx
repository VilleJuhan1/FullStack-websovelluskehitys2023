import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [newName, setNewName] = useState('');

  const handleAddName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value);
  };

  const AddPerson = (event) => {
    event.preventDefault();
    const newPerson = { name: newName };
    setPersons([...persons, newPerson]);
    setNewName('');
  };

  const Name = (props) => {
    return (
      <div>
      <p>{props.name}</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={AddPerson}>
        <div>
          name: <input type="text" value={newName} onChange={handleAddName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map((person, index) => (
          <Name key={index} name={person.name} />
        ))}
    </div>
  );
};

export default App;
