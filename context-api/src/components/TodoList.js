// import React from 'react'
// import { ThemeContext } from '../contexts/ThemeContext'


// class TodoList extends React.Component {
//   static contextType = ThemeContext; // We may or may not be able to use this context in functional component
//   render() {
//     const {isDarkTheme, darkTheme, lightTheme, changeTheme} = this.context;
//         const theme = isDarkTheme ? darkTheme : lightTheme;
//     return (
//       <div style={{background: theme.background, color: theme.text, height: '140px', 
//       textAlign: 'center' }}>
//         <p className='item'>React js</p>
//         <p className='item'>Anime</p>
//         <p className='item'>Coding</p>
//         <button className='ui button primary' onClick={changeTheme}>Change theme</button>
//       </div>
//     )
//   }
// }

// export default TodoList

// Using ContextHooks
import React, {useContext, useState} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { TodoListContext } from '../contexts/TodoListContext';


const TodoList = () => {
  const [todo, setTodo] = useState('');
  const {todos, addTodo, removeTodo} = useContext(TodoListContext);
  const {isDarkTheme, darkTheme, lightTheme, changeTheme} = useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
  }

  const handleRemoveTodo = (e) => {
    removeTodo(e.target.id);
  }
  return(
    <div style={{background: theme.background, color: theme.text, 
      textAlign: 'center' }}>
      {
        todos.length ? (
          todos.map((todo) => {
            return <p id={todo.id} onClick = {handleRemoveTodo} className='item' key={todo.id}>{todo.text}</p>
          }) 
        ) : (<div> You have no todos </div>)
      }

      <form onSubmit = {handleSubmit}>
        <label htmlFor='todo'>Add todo</label>
        <input type='text'  onChange={handleChange}/>
        <input type='submit' value='Add new todo' className='ui button primary'/>
      </form>
        
        <button className='ui button primary' onClick={changeTheme}>Change theme</button>
      </div>
  )
}


export default TodoList
