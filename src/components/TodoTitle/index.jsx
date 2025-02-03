import "./TodoTitle.css"
export function TodoCounter ( { total, completed } ){
    return (
        <h1 className="td-counter-title"> Has completado <span className="td-counter-completed"> {completed} </span> de <span className="td-counter-total"> {total} </span> todo's </h1>
    );
}