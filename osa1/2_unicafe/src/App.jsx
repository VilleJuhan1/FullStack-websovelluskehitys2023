import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticsLine = (props) => {
  console.log("Creating a statistics line", props.text, props.value)
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}

// Tehtävänannossa komponentin nimi on Statistics
const TheyDidTheMath = (props) => {
  console.log("Doing 'the math' with", props);
  const sum = props.values.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

  if (sum === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  const avg = ((props.values[0] * 1 + props.values[2] * (-1)) / sum)
  const pos = (props.values[0] / sum * 100)

  return (
    <div>
      <h2>Statistics</h2>
      <StatisticsLine text = "Good" value = {props.values[0]}/>
      <StatisticsLine text = "Neutral" value = {props.values[1]}/>
      <StatisticsLine text = "Bad" value = {props.values[2]}/>
      <StatisticsLine text = "All" value = {sum}/>
      <StatisticsLine text = "Average" value = {avg}/>
      <StatisticsLine text = "Positive" value = {pos}/>
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
      <TheyDidTheMath values = {[good, neutral, bad]}/>
    </div>
  )
}

export default App