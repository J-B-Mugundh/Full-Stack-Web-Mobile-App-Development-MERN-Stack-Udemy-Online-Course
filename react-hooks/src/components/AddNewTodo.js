import React, {useState} from 'react'
import './TodoList.css';
const AddNewTodo = ({addTodo}) => {
  const [todos, setTodos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todos);
    setTodos('');
  }
  return (
    <div className="AddNewTodo">
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor='todo'></label> */}
        <input type='text' value={todos} id='todo' onChange = {(e) => {setTodos(e.target.value)}}></input>
        <input type='submit' value='Add'></input>
      </form>
    </div>
  )
}

export default AddNewTodo
