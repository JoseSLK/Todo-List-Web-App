import { useEffect, useState } from 'react'
import { useLocalStorage } from '../Hooks/useLocalStorage'
import './index.css'
import { AppUi } from './AppUi'

function App() {
  
  const {
    items: todos,
    saveItem: saveTodos,
    error,
    loading
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');
  const [allCompleted, setAllCompleted] = useState(false);
  const [showCongratsMessage, setShowCongratsMessage] = useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(
    todo => todo.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    if ( todos.length > 0 ) {
      const allCompleted = todos.every(todo => todo.completed);
      setAllCompleted(allCompleted);
    }
    
  }, [todos]);

  useEffect(() => {
    if (allCompleted) {
      setShowCongratsMessage(true);
      const timer = setTimeout(() => {
        setShowCongratsMessage(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [allCompleted])

  useEffect(() => {
    if(allCompleted){
      document.body.classList.add('green-gradient');
    } else {
      document.body.classList.remove('green-gradient');
    }
  }, [allCompleted])

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

    <AppUi
      error={error}
      loading={loading}
      completeTodo={completeTodo}
      deleteToto={deleteToto}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      showCongratsMessage={showCongratsMessage}
      allCompleted={allCompleted}
    />

  )
}

export default App
