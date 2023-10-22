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
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

// Iterates through every exercise in the course
const Content = (props) => {
  console.log(props);
  return (
    <div>
      {props.ex.map((object, index) => (
        <Part key={index} name={object.name} exercises={object.exercises} />
      ))}
    </div>
  );
};


// Accumulate the total amount of exercises
const Total = (props) => {
  console.log(props)
  const total = props.ex.reduce((accumulator, object) => accumulator + object.exercises, 0)
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content ex={course.parts}/>
      <Total ex={course.parts}/>
    </div>
  )
}

export default App