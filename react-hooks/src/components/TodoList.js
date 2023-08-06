import React, {useState} from 'react'

const TodoList = () => {
    // todos => actual value, setTodos => function to change the actual value
    const [todos, setTodos] = useState([
        {text: 'Pay bills', id: 1},
        {text: 'Do homework', id: 2},
        {text: 'Water plants', id: 3}
    ]);

    const addTodo = () => {
        setTodos([
            ...todos, // this gives the earlier existing todos
            {text: 'Learn hooks', id: Math.random()} // uuid package for unique id
        ])
    }

  return (
    <div>
      <ul>
        {todos.map((todo) => {
            return(
                <li key={todo.id}>{todo.text}</li>
            )
        })}
      </ul>
      <button onClick={addTodo}>Add a todo</button>
    </div>
  )
}

export default TodoList
