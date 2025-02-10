import { TodoIcon } from ".";

export function EmptyIcon( props) {
    return (
        <TodoIcon 
            type="empty" 
            className={props.className}
            event={props.event}
        />
    )
}
