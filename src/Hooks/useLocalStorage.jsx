import { useEffect, useState } from "react";
import React from "react";

export function useLocalStorage( itemName, initialValue ) {
  
  const [items, setItems] = useState(initialValue);
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout ( () => {
      try{
        
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;
  
        if ( !localStorageItem ) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setItems(parsedItem)
        }
  
        setLoading(false);
        } catch (e) {
          setLoading(false);
          setError(true);
        }
    }, 2000)
    
  })

  const saveItem = ( newItem ) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItems(newItem)
  }

  return {
    items,
    saveItem,
    loading,
    error,
  }
}
