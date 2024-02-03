import React from 'react'

// Komponentti, johon voidaan syöttää haluttu merkkijono suodattamaan luettelon nimet
const FilterForm = (props) => {
    return (
        <form>
        <div>
          filter: <input type="text" value={props.value} onChange={props.onChange} />
        </div>
      </form>
    )
}

export default FilterForm