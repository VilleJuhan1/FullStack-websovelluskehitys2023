import React from 'react'

const Filter = (props) => {
    const filteredPersons=props.list.filter(person =>
        person.name.toLowerCase().includes(props.filter.toLowerCase())
      )
    return (
        <div>
            {filteredPersons.map((person, index) => (<p key={index}>{person.name} - {person.phone}</p>))}
        </div>
    )
}

export default Filter;