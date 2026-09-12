function StudentCard({ name, course, skill }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <p>Skill: {skill}</p>
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <h1>React Components & Props</h1>

      <StudentCard
        name="Asim Patel"
        course="Computer Science"
        skill="JavaScript"
      />

      <StudentCard
        name="React Student"
        course="React Fundamentals"
        skill="HTML & CSS"
      />
    </div>
  )
}

export default App