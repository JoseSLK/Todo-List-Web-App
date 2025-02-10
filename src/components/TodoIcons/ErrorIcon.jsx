import { TodoIcon } from ".";

export function ErrorIcon( props ) {
    return (
        <TodoIcon 
            type="error" 
            className={props.className}
            event={props.event}
        />
    )

}