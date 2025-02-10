import "./TodoEmpty.css";
import { EmptyIcon } from "../TodoIcons/EmptyIcon";

export function TodoEmpty() {
    return (
        <div className="td-empty-container">
            <EmptyIcon className="td-empty-icon"/>
            <p>No tienes tareas pendientes, agrega una tarea para empezar a trabajar.</p>
        </div>
    )
}
