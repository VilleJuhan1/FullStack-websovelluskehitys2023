import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newPerson => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(response => response.data)
}

const deleteContact = async (contactId) => {
    try {
      await axios.delete(`${baseUrl}/${contactId}`)
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  }

export default { 
  getAll: getAll, 
  create: create,
  deleteContact: deleteContact
}