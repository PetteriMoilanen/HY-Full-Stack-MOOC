
import Course from './components/Course'

const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  //const totalEx = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  //console.log("totalEx", totalEx)
  return (
    <div>      
      <h1>Web development curriculum</h1>
      {courses.map(course => <Course key={course.id} course={course} totalEx={course.parts.reduce((sum, part) => sum + part.exercises, 0)}/>)}
    </div>
  )
}

export default App