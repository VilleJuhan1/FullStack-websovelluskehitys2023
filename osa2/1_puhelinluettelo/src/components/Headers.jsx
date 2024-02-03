import React from 'react'

// Määritellään otsikkokomponentti, jolle annetaan parametrina haluttu koko
const Headers = (props) => {

  const style = props.style
  const text = props.text
  const headerTags = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
  }

  const headerStyle = headerTags[style] || 'div'

  return React.createElement(headerStyle, null, text)
}

export default Headers