// Return the string as a h1-header
const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

// Return a single string-representation of the exercise name and the amount of work for it
const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.name} {props.work}</p>
    </div>
  )
}

// Iterates through every exercise in the course
const Content = (props) => {
  console.log(props)
  return (
    <div>
      {props.ex.map((tuple, index) => (
        <Part key={index} name={tuple[0]} work={tuple[1]} />
      ))}
    </div>
  )
}

// Accumulate the total amount of exercises
const Total = (props) => {
  console.log(props)
  const total = props.ex.reduce((accumulator, tuple) => accumulator + tuple[1], 0)
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const exercises = [[part1, exercises1], [part2, exercises2], [part3, exercises3]]

  return (
    <div>
      <Header course={course}/>
      <Content ex={exercises}/>
      <Total ex={exercises}/>
    </div>
  )
}

export default App