const Course = ({ course, totalEx }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      {course.parts.map(part => 
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
      )}
      <strong>total of {totalEx} exercises</strong>
    </div>
  )
}
export default Course