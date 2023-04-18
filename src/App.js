/*const toDoList = [
  { id: 1, task: "Buy groceries", status: "Incomplete" },
  { id: 2, task: "Pay rent", status: "Incomplete" },
  { id: 3, task: "Call mom", status: "Incomplete" },
  { id: 4, task: "Finish report for work", status: "Incomplete" },
  { id: 5, task: "Schedule dentist appointment", status: "Incomplete" },
  { id: 6, task: "Organize closet", status: "Incomplete" },
  { id: 7, task: "Take dog for a walk", status: "Incomplete" },
  { id: 8, task: "Pick up dry cleaning", status: "Incomplete" },
  { id: 9, task: "Buy birthday present for friend", status: "Incomplete" },
  { id: 10, task: "Go to the gym", status: "Incomplete" },
  { id: 11, task: "Read a chapter of book", status: "Incomplete" },
  { id: 12, task: "Watch a documentary", status: "Incomplete" },
  { id: 13, task: "Research new hobby", status: "Incomplete" },
  { id: 14, task: "Plan weekend trip", status: "Incomplete" },
  { id: 15, task: "Update resume", status: "Incomplete" }
]*/

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <ul>
        <Task />
      </ul>
    </div>
  )
}

function Header() {
  return <h1>List of tasks</h1>
}

function Filter() {
  return (
    <>
      <input type="text" placeholder="Task" />
      <button>Buscar</button>
    </>
  )
}

function Task(props) {
  return <li>This is the task</li>
}

export default App
