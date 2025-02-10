import "./TodoTitle.css"
import { TodoContext } from "../../TodoContex"
import { useContext } from "react"
export function TodoCounter (){
    const {
        totalTodos,
        completedTodos,
    } = useContext(TodoContext)
    return (
        <h1 className="td-counter-title"> Has completado <span className="td-counter-completed"> {completedTodos} </span> de <span className="td-counter-total"> {totalTodos} </span> todo's </h1>
    );
}