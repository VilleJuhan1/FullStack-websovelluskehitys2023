import React from 'react'

// Suodatin muuntaa sekä nimet että syötteen pieniksi kirjaimiksi ja vertaa niitä keskenään
const Filter = (props) => {
    const filteredPersons=props.list.filter(person =>
        person.name.toLowerCase().includes(props.filter.toLowerCase())
      )

    // Palautetaan ne henkilöt listana, jotka vastaavat suodatinta
    return (
        <div>
        {filteredPersons.map((person) => (
          <div key={person.id}>
            <button style={{ marginRight: '5px' }} onClick={() => props.deletePerson(person.id)}>Delete</button>
            <span>{person.name} - {person.number}</span>
          </div>
        ))}
      </div>
    )
}

export default Filter;