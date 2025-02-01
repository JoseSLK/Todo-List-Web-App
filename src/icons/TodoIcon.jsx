import React from "react"
import Check from "../assets/check.svg?react"
import Delete from "../assets/delete.svg?react"
import "../components/styles/TodoIcon.css"

const icons = {
    delete: {
        component: Delete,
        props: {
            className: "icon-delete-svg"
        }
    },
    check: {
        component: Check,
        props: {
            className: "icon-check-svg"
        }
    }
}

function TodoIcon ( { type, className, event } ){
    const icon = icons[type];

    if (!icon) return null;

    return (
        <span 
            className={`Icon icon-container-${type}`}
            onClick={event}
        >
            {React.createElement( icon.component, {...icon.props, className} )}
        </span>
    )
}

export { TodoIcon };