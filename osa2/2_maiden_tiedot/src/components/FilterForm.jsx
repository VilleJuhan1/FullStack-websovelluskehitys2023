import React from 'react'

// Komponentti, johon voidaan syöttää haluttu merkkijono suodattamaan luettelon maat
const FilterForm = (props) => {
    return (
        <form>
        <div>
          <input type="text" value={props.value} onChange={props.onChange} />
        </div>
      </form>
    )
}

export default FilterForm