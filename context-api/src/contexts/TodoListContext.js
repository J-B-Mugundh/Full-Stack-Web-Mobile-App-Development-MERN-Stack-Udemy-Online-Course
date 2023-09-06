import React, {createContext, useState} from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = ({children}) => {
    const [todos, setTodos] = useState([
        {text: 'React js', id: 1},
        {text: 'Anime', id: 2}, 
        {text: 'Coding', id: 3}
    ])

    const addTodo = (todo) => {
        setTodos([
            ...todos,
            {text: todo, id: Math.random()}
        ])
    }

    return (
        <TodoListContext.Provider value = {{todos, addTodo}}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider;