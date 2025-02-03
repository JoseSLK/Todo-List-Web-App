import React from "react";
import { TodoIcon } from "./";

export function DeleteIcon ( props ){
    return (
        <TodoIcon 
            className={`${props.className}`}
            type="delete"
            event={props.onClick}
        />
    )
}