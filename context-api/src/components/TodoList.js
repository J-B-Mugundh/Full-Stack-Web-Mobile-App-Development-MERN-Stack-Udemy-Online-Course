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
import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'


const TodoList = () => {
  const {isDarkTheme, darkTheme, lightTheme, changeTheme} = useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return(
    <div style={{background: theme.background, color: theme.text, height: '140px', 
      textAlign: 'center' }}>
        <p className='item'>React js</p>
        <p className='item'>Anime</p>
        <p className='item'>Coding</p>
        <button className='ui button primary' onClick={changeTheme}>Change theme</button>
      </div>
  )
}


export default TodoList
