import { TodoItem } from '../components/TodoItem'
import { TodoList } from '../components/TodoList'
import { TodoCounter } from '../components/TodoTitle'
import { TodoButtonCreate } from '../components/TodoButtonCreate'
import { TodoSearch } from '../components/TodoSearch'
import { TodoLoading } from '../components/TodoLoading'
import { TodoError } from '../components/TodoError'
import { TodoEmpty } from '../components/TodoEmpty'
import './app.css'


export function AppUi ({
    loading,
    error,
    completeTodo,
    deleteToto,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    showCongratsMessage,
    allCompleted
}) {
   console.log( loading + " " + searchedTodos.length)
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
          
        </>
      )
}