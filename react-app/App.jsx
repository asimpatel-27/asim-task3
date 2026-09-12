import { useState } from "react"
import TaskList from "./TaskList"

function App() {
  const [taskText, setTaskText] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = (e) => {
    e.preventDefault()

    if (taskText.trim() === "") return

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: taskText,
        completed: false
      }
    ])

    setTaskText("")
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="app">
      <div className="task-container">
        <h1>Task Tracker</h1>
        <p className="subtitle">Manage your daily tasks</p>

        <form onSubmit={addTask} className="task-form">
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter your task..."
          />

          <button type="submit">Add Task</button>
        </form>

        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </div>
    </div>
  )
}

export default App