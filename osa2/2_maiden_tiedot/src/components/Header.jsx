import React from 'react'
import reactLogo from '../assets/react.svg'

// Kaikki sovelluksen sisältö ennen teksti-ikkunaa
const Header = () => {
  return (
		<div>
			<a href="https://react.dev" target="_blank">
				<img src={reactLogo} className="logo react" alt="React logo" />
			</a>
			<h1>World's Countries App</h1>
			<h3>Search by name</h3>
		</div>
	)

}

export default Header