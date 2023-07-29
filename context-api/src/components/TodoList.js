import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'


class TodoList extends React.Component {
  static contextType = ThemeContext
  render() {
    const {isDarkTheme, darkTheme, lightTheme, changeTheme} = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
      <div style={{background: theme.background, color: theme.text, height: '140px', 
      textAlign: 'center' }}>
        <p className='item'>React js</p>
        <p className='item'>Anime</p>
        <p className='item'>Coding</p>
        <button className='ui button primary' onClick={changeTheme}>Change theme</button>
      </div>
    )
  }
}

export default TodoList
