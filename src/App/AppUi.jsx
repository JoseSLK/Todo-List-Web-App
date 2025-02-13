import { TodoItem } from '../components/TodoItem'
import { TodoList } from '../components/TodoList'
import { TodoCounter } from '../components/TodoTitle'
import { TodoButtonCreate } from '../components/TodoButtonCreate'
import { TodoSearch } from '../components/TodoSearch'
import { TodoLoading } from '../components/TodoLoading'
import { TodoError } from '../components/TodoError'
import { TodoEmpty } from '../components/TodoEmpty'
import './app.css'
import { TodoContext } from '../TodoContex'
import { useContext } from 'react'
import { useState, useEffect } from 'react'
import { Modal } from '../Modal'
import { FormAddTodo } from '../components/FormAddTodo'

export function AppUi () {

  const [allCompleted, setAllCompleted] = useState(false);
  const [showCongratsMessage, setShowCongratsMessage] = useState(false);
  const { todos } = useContext(TodoContext)
  const {
    loading,
    error,
    completeTodo,
    deleteToto,
    searchedTodos,
    openModal,
    setOpenModal
  } = useContext(TodoContext);


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
  }, [allCompleted]);

  useEffect(() => {
    if(allCompleted){
      document.body.classList.add('green-gradient');
    } else {
      document.body.classList.remove('green-gradient');
    }
  }, [allCompleted]);
  
    return (
        <>
          <TodoCounter />
          <TodoSearch />

            <TodoList>

              {loading && <TodoLoading />}
              {error && <TodoError />}
              {(!loading && searchedTodos.length === 0) && <TodoEmpty />}

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

          {openModal && (
            <Modal>
              <FormAddTodo />
            </Modal>
          )};
          
          
        </>
      )
}