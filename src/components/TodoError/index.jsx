import { ErrorIcon } from "../TodoIcons/ErrorIcon";
import "./TodoError.css";

export function TodoError() {
    return (
        <div className="td-error-container">
            <ErrorIcon className="td-error-icon"/>
            <p>Error al cargar la lista de tareas. <br/>Intenta nuevamente. <br/>Si el problema persiste, contacta al administrador.</p>
        </div>
    )

}
