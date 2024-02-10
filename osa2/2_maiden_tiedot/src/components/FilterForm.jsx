import React from 'react'

// Komponentti, johon voidaan syöttää haluttu merkkijono suodattamaan luettelon maat
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