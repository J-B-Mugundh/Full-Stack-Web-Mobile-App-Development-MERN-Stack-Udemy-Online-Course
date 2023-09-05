import React, {useEffect, useState} from 'react'
import AddNewTodo from './AddNewTodo';
import './TodoList.css';
const TodoList = () => {
    // todos => actual value, setTodos => function to change the actual value
    const [todos, setTodos] = useState([
        {text: 'Task 1', id : 1}
    ]);

    const [count, setCount] = useState(0);

    const addTodo = (text) => {
        setTodos([
          //this gives the earlier existing todos
            ...todos, // ... => spreader
            {text: text, id: Math.random()} // uuid package for unique id
        ])
    }

    useEffect(() => { // Runs everytime the component renders
        console.log('use effect', todos);
    }, [todos]) // second parameter tells when to fire the useEffect (ie when which is modified)

    useEffect(() => { // Runs everytime the component renders
        console.log('use effect', count);
    }, [count]) // second parameter tells when to fire the useEffect (ie when which is modified)

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
      <button onClick={() => setCount(count + 1)}>Score: {count}</button>
    </div>
  )
}

export default TodoList
