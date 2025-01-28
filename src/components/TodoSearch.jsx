import React from 'react';
export function TodoSearch ({
        searchValue,
        setSearchValue
    }) {
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