import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

// Tehtävänannossa komponentin nimi on Statistics
const TheyDidTheMath = (props) => {
  console.log(props);
  const sum = props.luvut.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

  if (sum === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }

  const avg = ((props.luvut[0] * 1 + props.luvut[2] * (-1)) / sum)
  const pos = (props.luvut[0] / sum * 100)
  
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good {props.luvut[0]}</p>
      <p>Neutral {props.luvut[1]}</p>
      <p>Bad {props.luvut[2]}</p>
      <p>All {sum}</p>
      <p>Average {avg}</p>
      <p>Positive {pos} %</p>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    console.log('adding a positive comment, now', (good + 1))
    setGood(good + 1)
  }

  const increaseNeutral = () => {
    console.log('adding a neutral comment, now', (neutral + 1))
    setNeutral(neutral + 1)
  }

  const increaseBad = () => {
    console.log('adding a bad comment, now', (bad + 1))
    setBad(bad + 1)    
  }

  return (
    <div>
      <h1>Give feedback!</h1>
      <Button handleClick={increaseGood} text="Good"/>
      <Button handleClick={increaseNeutral} text="Neutral"/>
      <Button handleClick={increaseBad} text="Bad"/>
      <TheyDidTheMath luvut = {[good, neutral, bad]}/>
    </div>
  )
}

export default App