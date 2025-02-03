import { useState } from "react";
import React from "react";

export function useLocalStorage( itemName, initialValue ) {
  
  const localStorageItem = localStorage.getItem(itemName)

  let parsedItem;

  if ( !localStorageItem ) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [items, setItems] = useState(parsedItem);

  const saveItem = ( newItem ) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItems(newItem)
  }

  return [items, saveItem]
}
