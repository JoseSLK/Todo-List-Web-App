import React from "react";
import { TodoIcon } from "./TodoIcon.jsx";

export function DeleteIcon ( props ){
    return (
        <TodoIcon 
            className={`${props.className}`}
            type="delete"
            event={props.onClick}
        />
    )
}