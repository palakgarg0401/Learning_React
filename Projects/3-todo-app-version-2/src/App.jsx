import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import "./App.css"

function App() {
  const todoItems = [
    {
      name : 'Buy Milk',
      dueDate : '8/7/2025'
    },
    {
      name : 'Go to College',
      dueDate : '8/7/2025'
    },
    {
      name : 'Form fill up',
      dueDate : '10/7/2025'
    }
  ]
  return <div className = "todo-container text-center">
    <AppName />
    <AddTodo />
    <TodoItems todoItems = {todoItems} />
  </div>
}

export default App
