import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Day 3 - React State</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  )
}

export default App