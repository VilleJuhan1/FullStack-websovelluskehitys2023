// Return the string as a h1-header
const Header = (props) => {
    var courseName = props.name
    console.log("       Header-komponentti: ", props)
    return (
      <div>
        <h1>{courseName}</h1>
      </div>
    )
}

// Return a single string-representation of the exercise name and the amount of work for it
const Part = (props) => {
    console.log("           Part-komponentti, ", props)
    return (
      <div>
        <p>{props.name} {props.exercises}</p>
      </div>
    )
}

// Iterates through every exercise in the course
const Content = (props) => {
    var ex = props.parts
    console.log("       Content-komponentti, ", ex)
    return (
      <div>
        {ex.map((object, index) => (
          <Part key={index} name={object.name} exercises={object.exercises} />
        ))}
      </div>
    )
}

// Accumulate the total amount of exercises
const Total = (props) => {
    var ex = props.ex
    console.log("       Total-komponentti, ", ex)
    const total = ex.reduce((accumulator, object) => accumulator + object.exercises, 0)
    return (
      <div>
        <b>Number of exercises {total}</b>
      </div>
    )
}

// The main component for composing the course details together
const Course = (props) => {
    var course = props.course
    console.log("   Course-komponentti, ", course)

    return (
        <div>
            <Header name = {course.name}/>
            <Content parts = {course.parts}/>
            <Total ex = {course.parts}/>
        </div>
    )
}

export default Course