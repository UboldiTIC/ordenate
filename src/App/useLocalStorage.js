import React from 'react';

// CUSTOM HOOKS:

function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue);
  
  //Estados de carga y error:
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  //Efecto para cargar el item desde localStorage:
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  },[]);
  //},[dependencies]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item, 
    saveItem, 
    loading, 
    error,
  };
}

export { useLocalStorage };