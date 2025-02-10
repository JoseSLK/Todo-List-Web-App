import React from "react";
import { TodoIcon } from "./";

export function CheckIcon ( props ){
    return (
        <TodoIcon 
            className={`${props.className}`}
            type="check"
            event={props.onClick}
        />
    )
}