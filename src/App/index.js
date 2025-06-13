import React from 'react';
import { AppUI } from './AppUI.js';
import { useLocalStorage } from './useLocalStorage.js';
import './App.css';

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

function App() {

  const [tasks, saveTasks] = useLocalStorage('TASK_V1', []); // el valor inicial es un array vacío.

  const [event, setEvent] = React.useState('');
  console.log("Los ususarios buscan: " + event);

  // Función para completar una tarea
  const completeTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = tasks.findIndex(task => task.text === text);
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
    saveTasks(newTasks);
  };

  // Función para eliminar una tarea
  const deleteTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = tasks.findIndex(task => task.text === text);
    newTasks.splice(taskIndex, 1);
    saveTasks(newTasks);
  };

  // Estados Derivados: a partir de estados ya existentes, nos permiten realizar cálculos.
  const completedTasks = tasks.filter(task => !!task.completed).length;
  const totalTasks = tasks.length;
  const completedPercentage = (completedTasks / totalTasks) * 100;
  
  // Estado Derivado para filtrar las tareas:
  const searchedTasks = tasks.filter(
    (task) => {
      const taskText = task.text.toLocaleLowerCase();
      const eventText = event.toLocaleLowerCase();
      return taskText.includes(eventText);
    }
  );

  return (
  <AppUI
    completedTasks={completedTasks}
    totalTasks={totalTasks}
    completedPercentage={completedPercentage}
    setEvent={setEvent}
    searchedTasks={searchedTasks}
    completeTask={completeTask}
    deleteTask={deleteTask}
  />
  ); 
}

export default App;