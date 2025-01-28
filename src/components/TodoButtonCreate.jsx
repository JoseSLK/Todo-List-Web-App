export function TodoButtonCreate (){
    return (
        <button 
        className="td-button"
        onClick={
            () => {
                console.log("Crear tarea");
            }
        }
        >+</button>
    );
}