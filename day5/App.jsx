import { useState } from "react"

function App() {
  const [showTasks, setShowTasks] = useState(true)

  const tasks = [
    "Learn React",
    "Practice JSX",
    "Build Components",
    "Learn useState",
    "Create Task Tracker"
  ]

  return (
    <div className="container">
      <h1>Day 5 - Lists & Conditional Rendering</h1>

      <button onClick={() => setShowTasks(!showTasks)}>
        {showTasks ? "Hide Tasks" : "Show Tasks"}
      </button>

      {showTasks ? (
        <div className="task-list">
          {tasks.map((task, index) => (
            <div className="task" key={index}>
              <span>{index + 1}.</span> {task}
            </div>
          ))}
        </div>
      ) : (
        <p className="hidden">Tasks are hidden</p>
      )}
    </div>
  )
}

export default App