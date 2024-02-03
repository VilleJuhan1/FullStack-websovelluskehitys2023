import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

// Hakee kaiken datan DB:stä
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

// Luodaan uusi henkilö DB:hen
const create = newPerson => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(response => response.data)
}

// Poistetaan henkilö, jonka id vastaa annettua
const deleteContact = async (contactId) => {
    try {
      await axios.delete(`${baseUrl}/${contactId}`)
    } catch (error) {
      console.error('Virhe poistettaessa henkilöä:', error);
    }
  }

// Päivitetään id:tä vastaava henkilö vastaamaan uusia yhteystietoja (myös nimi)
const update = (id, updatePerson) => {
  const request = axios.put(`${baseUrl}/${id}`, updatePerson)
  return request.then(response => response.data)
}

export default { 
  getAll: getAll, 
  create: create,
  deleteContact: deleteContact,
  update: update
}