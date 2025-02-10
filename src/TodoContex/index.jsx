import React from "react";
import { useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider ({ children }) {

    const {
        items: todos,
        saveItem: saveTodos,
        error,
        loading
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = useState('');
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
      const searchedTodos = todos.filter(
        todo => todo.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    
      const completeTodo = (title) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex( todo => todo.title === title);
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    
        saveTodos(newTodos)
      }
      
      const deleteToto = (title) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex( todo => todo.title === title);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completeTodo,
            deleteToto,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            todos
        }}>
            {children}
        </TodoContext.Provider>


    );
}

export { TodoContext, TodoProvider };
