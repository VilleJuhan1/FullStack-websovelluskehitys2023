// Return the string as a h2-header
const Header = (props) => {
    var courseName = props.name
    console.log("           Header-komponentti: ", props)
    return (
      <div>
        <h2>{courseName}</h2>
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

// Accumulate the total amount of exercises
const Total = (props) => {
    var ex = props.ex
    console.log("           Total-komponentti, ", ex)
    const total = ex.reduce((accumulator, object) => accumulator + object.exercises, 0)
    return (
      <div>
        <b>Number of exercises {total}</b>
      </div>
    )
}

// Iterates through every exercise in the course
const Content = (props) => {
    var ex = props.parts
    var name = props.name
    console.log("       Content-komponentti, ", ex)
    return (
      <div>
        <Header name = {name}/>
        {ex.map((object, index) => (
            <Part key={index} name={object.name} exercises={object.exercises} />
        ))}
        <Total ex = {ex}/>
      </div>
    )
}

// The main component for composing the course details together
const Course = (props) => {
    var courses = props.courses
    console.log("   Course-komponentti, ", courses)

    return (
        <div>
            {courses.map((object, index) => (
                <Content key={index} name={object.name} parts={object.parts} />
            ))}            
        </div>
    )
}

export default Course