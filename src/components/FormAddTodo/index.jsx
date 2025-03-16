import React from "react";
import "./FormAddTodo.css";
import { TodoContext } from "../../TodoContex";
import { useContext } from "react";

export function FormAddTodo() {
    const { todos, saveTodos, setOpenModal } = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            title: e.target.title.value,
            description: e.target.description.value,
            end_date: e.target.end_date.value,
            completed: false,
            id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        }
        saveTodos([...todos, newTodo]);
        e.target.reset();
    }

    return (
        <form className="td-form-add-todo" onSubmit={handleSubmit}>
            <div className="td-back" onClick={() => setOpenModal(false) }></div>
            {/* title, description, end_date, completed */}
            <input type="text" placeholder="Título" className="td-form-add-todo-input" name="title"/>
            <input type="text" placeholder="Descripción" className="td-form-add-todo-input" name="description"/>
            <input type="date" placeholder="Fecha de finalización" className="td-form-add-todo-input" name="end_date"/>
            <button type="submit" className="td-form-add-todo-button" >Agregar</button>
        </form>
    )
}
// Puedo usar el context todos y agregar un nuevo todo, para luego llamar a useLocalStorage y guardar el nuevo todo.
