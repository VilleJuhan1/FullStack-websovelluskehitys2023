import React from 'react'

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