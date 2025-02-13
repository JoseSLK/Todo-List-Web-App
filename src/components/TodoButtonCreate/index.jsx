import "./TodoButtonCreate.css"
import { TodoContext } from "../../TodoContex"
import { useContext } from "react"

export function TodoButtonCreate (){
    const {
        openModal,
        setOpenModal
    } = useContext(TodoContext);

    return (
        <button 
        id="td-button"
        className="td-button"
        onClick={
            () => {
                setOpenModal(!openModal);  
            }
        }
        >+</button>
    );
}