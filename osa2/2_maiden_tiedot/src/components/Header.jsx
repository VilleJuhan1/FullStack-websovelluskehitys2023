import React from 'react'
import reactLogo from '../assets/react.svg'

const Header = () => {
  return (
		<div>
			<a href="https://react.dev" target="_blank">
				<img src={reactLogo} className="logo react" alt="React logo" />
			</a>
			<h1>World's Countries App</h1>
			<h3>Filter by name</h3>
		</div>
	)

}

export default Header