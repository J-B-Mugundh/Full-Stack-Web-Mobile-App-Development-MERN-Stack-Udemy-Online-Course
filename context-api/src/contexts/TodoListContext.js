import React, {createContext, useState} from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = ({children}) => {
    const [todos, setTodos] = useState([
        {text: 'React js', id: 1},
        {text: 'Anime', id: 2}, 
        {text: 'Coding', id: 3}
    ])

    return (
        <TodoListContext.Provider value = {{todos}}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider;