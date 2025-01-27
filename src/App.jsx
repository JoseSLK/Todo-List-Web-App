import { useState } from 'react'
import { TodoItem } from './components/TodoItem'
import { TodoList } from './components/TodoList'
import { TodoCounter } from './components/TodoCounter'
import { TodoButtonCreate } from './components/TodoButtonCreate'

import './components/styles/App.css'
import { TodoSearch } from './components/TodoSearch'

const todoItems = [
  {
    title: "Hacer pasta para el almuerzo",
    description: "Con agua y jabon",
    end_date: "2025-02-20T14:30:00",
    completed: false
  },
  {
    title: "Tarea 2",
    description: "Descripción de la tarea 2",
    end_date: "2025-02-25T10:00:00",
    completed: true
  },
  {
    title: "Tarea 3",
    description: "Descripción de la tarea 3",
    end_date: "2025-03-01T12:00:00",
    completed: false
  },
  {
    title: "Tarea 4",
    description: "Descripción de la tarea 3",
    end_date: "2025-03-01T12:00:00",
    completed: false
  }
];

function App() {

  return (
    <>
      <TodoCounter total={15} completed={4}/>
      <TodoSearch />
      <TodoList>
        {todoItems.map(todo => (
          <TodoItem key={todo.title} title={todo.title} description={todo.description} end_date={todo.end_date} completed={todo.completed}/>
        ))}
      </TodoList>
      <TodoButtonCreate/>
      
    </>
  )
}

export default App
