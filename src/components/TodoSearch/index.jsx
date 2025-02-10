import React from 'react';
import "./TodoSearch.css"
import { TodoContext } from '../../TodoContex';
import { useContext } from 'react';

export function TodoSearch () {
    

    const {
        searchValue,
        setSearchValue
    } = useContext(TodoContext);

    return (
        <input 
            className="td-input" 

            type="text" 
            placeholder="Filtrar por titulo.."
            value={searchValue} 
            onChange={
                (event) => {
                    setSearchValue(event.target.value);
                }
            }
        />
    );
}