import React from "react"
import Check from "./icons/check.svg?react"
import Delete from "./icons/delete.svg?react"
import Empty from "./icons/empty.svg?react"
import Error from "./icons/error.svg?react"
import "./TodoIcon.css"


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
    },
    empty: {
        component: Empty,
        props: {
            className: "icon-empty-svg"
        }
    },
    error: {
        component: Error,
        props: {
            className: "icon-error-svg"
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