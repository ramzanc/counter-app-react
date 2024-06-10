import './App.css'
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 9-11",
    completed: true
  }, {
    title: "Study DSA",
    description: "Study DSA from 10-12",
    completed: false
  }]);

  function addTodo() {
    setTodos([...todos, {
      title: "New Todo",
      description: "Description of new todo"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}
    </div>
  )
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}

export default App
