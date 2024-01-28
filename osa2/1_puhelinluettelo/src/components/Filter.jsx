import React from 'react'

const Filter = (props) => {
    const filteredPersons=props.list.filter(person =>
        person.name.toLowerCase().includes(props.filter.toLowerCase())
      )
    return (

        <div>
        {filteredPersons.map((person) => (
          <div key={person.id}>
            <button style={{ marginRight: '5px' }} onClick={() => props.deletePerson(person.id)}>Delete</button>
            <span>{person.name} - {person.number} - {person.id} </span>
          </div>
        ))}
      </div>
    )
}

export default Filter;