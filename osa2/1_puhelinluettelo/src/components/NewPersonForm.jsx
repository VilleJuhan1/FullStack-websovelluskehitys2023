import React from 'react'

// Määritellään uuden henkilön lisäämisen elementit ja niiden muotoilut
const NewPersonForm = ({ newName, newNumber, handleAddName, handleAddNumber, addPerson }) => {
  return (
    <form onSubmit={addPerson}>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
        <input type="text" value={newName} onChange={handleAddName} style={{ width: '70%', padding: '8px' }} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Number:</label>
        <input type="text" value={newNumber} onChange={handleAddNumber} style={{ width: '70%', padding: '8px' }} />
      </div>
      <div>
      <button type="submit" style={{ width: '35%', padding: '10px', background: '#1e1e1e', color: 'white', border: 'none' }}>Add</button>
      </div>
    </form>
  )
}

export default NewPersonForm