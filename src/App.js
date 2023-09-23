import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from "react"
import AddTask from "./components/AddTask"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  //Submit task
  const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
  }

  //Deleting task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle remainder
  const onToggleRemainder = (id) => {
    setTasks(tasks.map((task) => task.id ? {...task, remainder: !task.remainder} : task))
  }

  return (
    <div className="App">
    <Header onAdd= {() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/> 
    {showAddTask && <AddTask onAdd={addTask}/>}
    {tasks.length > 0 ? (<Tasks tasks={tasks} 
    onDelete={deleteTask} onToggle={onToggleRemainder}/>) : ('No Tasks To Show') }
    </div>
  );
}

export default App;
