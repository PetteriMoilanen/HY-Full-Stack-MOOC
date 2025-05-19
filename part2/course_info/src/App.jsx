const Course = ({ course, totalEx }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map(part => 
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
      )}
      <strong>total of {totalEx} exercises</strong>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  const totalEx = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  console.log("totalEx", totalEx)
  return (
    <div>
      <Course course={course} totalEx={totalEx}/>
    </div>
  )
}

export default App