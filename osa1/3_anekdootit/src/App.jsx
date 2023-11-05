import { useState } from 'react'

// The Button component
// props.handleClick contains the function that the button press calls, props.text what the button says
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

// Renders the random anecdote of the day
// props.anecdote is the random anecdote sent to the component, props.votes is the amount of votes in the votes list that this anecdote has received
const AnecdoteOfTheDay = (props) => {
  return (
    <div>
    <h1>Anecdote of the day</h1>
    <p>{props.anecdote}</p>
    <p>Anecdote has {props.votes} votes.</p>    
    </div>
  )
}

// Renders the most voted anecdote
// Receives both the list of anecdotes and the list of votes as props and figures which is the most voted
const MostVoted = (props) => {

  const maxVotesIndex = props.votes.indexOf(Math.max(...props.votes))
  const mostVotedAnecdote = props.anecdotes[maxVotesIndex]

  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <p>{mostVotedAnecdote}</p>
    </div>
  )
}

// The main application body
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const initialVotes = new Uint8Array(anecdotes.length) // A new list of 0s the length of the anecdotes list
  const [votes, setVotes] = useState(initialVotes) // The indexed list of votes that has it's own state
  const [selected, setSelected] = useState(0) // The currently selected index number for anecdotes which also has it's own state

  // The component to creating the random number between 0 and the length of the anecdotes list
  const randomInt = () => {
    const x = anecdotes.length
    const randomInteger = Math.floor(Math.random() * (x)) 
    console.log('Creating random integer: ', randomInteger)
    setSelected(randomInteger)
  }

  // The component handling the voting of anecdotes
  const vote = () => {
    console.log("vote", {selected})
    const newVotes = [...votes]
    newVotes[selected]++
    setVotes(newVotes)
    console.log(newVotes)
  }

  // The output of the webpage
  return (
    <div>
      <AnecdoteOfTheDay anecdote = {anecdotes[selected]} votes = {votes[selected]}/>
      <Button handleClick={vote} text = "Vote"/>
      <Button handleClick={randomInt} text = "New anecdote"/>
      <MostVoted anecdotes={anecdotes} votes = {votes}/>
    </div>
  )
}

export default App