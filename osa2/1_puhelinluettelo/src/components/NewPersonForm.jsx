import React from 'react'

const NewPersonForm = ({ newName, newPhone, handleAddName, handleAddPhone, addPerson }) => {
  return (
    <form onSubmit={addPerson}>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
        <input type="text" value={newName} onChange={handleAddName} style={{ width: '70%', padding: '8px' }} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Phone:</label>
        <input type="text" value={newPhone} onChange={handleAddPhone} style={{ width: '70%', padding: '8px' }} />
      </div>
      <div>
      <button type="submit" style={{ width: '35%', padding: '10px', background: '#1e1e1e', color: 'white', border: 'none' }}>Add</button>
      </div>
    </form>
  )
}

export default NewPersonForm