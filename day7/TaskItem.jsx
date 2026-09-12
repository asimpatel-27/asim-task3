function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="task-item">
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />

        <span className={task.completed ? "completed" : ""}>
          {task.text}
        </span>
      </div>

      <button
        className="delete-btn"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </div>
  )
}

export default TaskItem