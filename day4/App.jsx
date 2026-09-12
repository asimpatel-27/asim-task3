import { useState } from "react"

function App() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(`Hello, ${name}! Your form was submitted.`)
  }

  return (
    <div className="container">
      <h1>Day 4 - Event Handling & Forms</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  )
}

export default App