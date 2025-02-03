import { useEffect, useState } from 'react'
import { TodoItem } from '../components/TodoItem'
import { TodoList } from '../components/TodoList'
import { TodoCounter } from '../components/TodoTitle'
import { TodoButtonCreate } from '../components/TodoButtonCreate'
import { TodoSearch } from '../components/TodoSearch'
import { useLocalStorage } from './useLocalStorage'
import './index.css'

function App() {
  
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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

  console.log({showCongratsMessage})

  return (
    <>
      <TodoCounter
        total={totalTodos} 
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.title} 
            title={todo.title} 
            description={todo.description} 
            end_date={todo.end_date} 
            completed={todo.completed} 
            id={todo.id}
            onComplete={() => completeTodo(todo.title)}
            onDelete={() => deleteToto(todo.title)}
          />
        ))}
      </TodoList>
      <TodoButtonCreate/>

      {showCongratsMessage && <div className={`td-congrats-message ${allCompleted? 'fade-in' : 'fade-out'}`}>¡Tareas completadas!</div>}
      
    </>
  )
}

export default App
