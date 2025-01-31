import { useEffect, useState } from 'react'
import { TodoItem } from './components/TodoItem'
import { TodoList } from './components/TodoList'
import { TodoCounter } from './components/TodoCounter'
import { TodoButtonCreate } from './components/TodoButtonCreate'

import './components/styles/App.css'
import { TodoSearch } from './components/TodoSearch'
import { use } from 'react'

const todoItems = [
  {
    title: "Entrar a la Universidad",
    description: "Con agua y jabon",
    end_date: "2025-02-10T08:00:00",
    completed: false,
    id: 1
  },
  {
    title: "Tarea2",
    description: "Descripción de la tarea 2",
    end_date: "2025-02-25T10:00:00",
    completed: true,
    id: 2
  },
  {
    title: "Tarea3",
    description: "Descripción de la tarea 3",
    end_date: "2025-03-01T12:00:00",
    completed: false,
    id: 3
  },
  {
    title: "Tarea4",
    description: "Descripción de la tarea 4",
    end_date: "2025-03-01T12:00:00",
    completed: false,
    id: 4
  }
];

function App() {
  const [todos, setTodos] = useState(todoItems);
  const [searchValue, setSearchValue] = useState('');
  const [allCompleted, setAllCompleted] = useState(false);
  const [showCongratsMessage, setShowCongratsMessage] = useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(
    todo => todo.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    const allCompleted = todos.every(todo => todo.completed);
    setAllCompleted(allCompleted);
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

    setTodos(newTodos)
  }
  
  const deleteToto = (title) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex( todo => todo.title === title);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
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
