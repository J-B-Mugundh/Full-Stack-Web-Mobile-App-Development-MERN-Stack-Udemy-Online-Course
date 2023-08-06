import React, {useState} from 'react'
import AddNewTodo from './AddNewTodo';
import './TodoList.css';
const TodoList = () => {
    // todos => actual value, setTodos => function to change the actual value
    const [todos, setTodos] = useState([
        
    ]);

    const addTodo = (text) => {
        setTodos([
            ...todos, // this gives the earlier existing todos
            {text: text, id: Math.random()} // uuid package for unique id
        ])
    }

  return (
    <div className="TodoList">
      <h1 style={{textAlign: 'center'}}>Todo List</h1>
      <ul>
        {todos.map((todo) => {
            return(
                <li key={todo.id}>{todo.text}</li>
            )
        })}
      </ul>
      <AddNewTodo addTodo ={addTodo}/>
    </div>
  )
}

export default TodoList
