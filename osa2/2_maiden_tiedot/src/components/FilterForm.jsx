import React from 'react'

// Teksti-ikkunan rakenne ja komponentit sovelluksessa
const FilterForm = (props) => {
    return (
        <form>
        <div style={{ textAlign: 'center' }}>
          <input type="text" value={props.value} onChange={props.onChange} style={{ margin: '0 auto', textAlign: 'center' }}/>
        </div>
      </form>
    )
}

export default FilterForm