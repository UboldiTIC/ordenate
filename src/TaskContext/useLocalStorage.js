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
  },[initialValue, itemName]);

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

/* const defaultTasks = [
  { text: 'Completar el curso.', completed: true },
  { text: 'Realizar el proyecto.', completed: false },
  { text: 'Rendir el examen.', completed: false },
  { text: 'Festejar.', completed: false },
  { text: 'Averiguar fecha.', completed: true },
];
 */
//localStorage.setItem('TASK_V1', JSON.stringify(defaultTasks));

// localStorage.removeItem('TASK_V1');