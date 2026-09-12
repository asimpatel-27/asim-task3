function App() {
  const skills = ["React", "JavaScript", "HTML", "CSS", "Tailwind"]

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-slate-900 text-white flex items-center justify-center text-2xl font-bold">
            AP
          </div>

          <h1 className="text-3xl font-bold text-slate-800 mt-5">
            Asim Patel
          </h1>

          <p className="text-slate-500 mt-2">
            React Fundamentals — Day 6
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            My Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <button className="w-full mt-8 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-700 transition">
          Continue Learning
        </button>
      </div>
    </div>
  )
}

export default App