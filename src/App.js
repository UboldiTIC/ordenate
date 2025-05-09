import React from 'react';
import { TaskCounter } from './TaskCounter';
import { TaskSearch } from './TaskSearch';
import { TaskList } from './TaskList';
import { TaskItem } from './TaskItem';
import { CreateTaskButton } from './CreateTaskButton';
import './App.css';

// CUSTOM HOOKS:

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

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
    <React.Fragment>
      <div className="App-container">
        <h1>Lista de tareas</h1>
        <TaskCounter 
          completedTasks={completedTasks}
          totalTasks={totalTasks}
          completedPercentage={completedPercentage}
        />
        <TaskSearch 
          event={event}
          setEvent={setEvent}
        />

        <TaskList>
          {searchedTasks.map((task) => (
            <TaskItem
              key={task.text}
              text={task.text}
              completed={task.completed}
              onComplete={() => completeTask(task.text)} // Función a TaskItem - No confundir con completedTasks.
              onDelete={() => deleteTask(task.text)}
            />
          ))}
        </TaskList>
        
        <CreateTaskButton />
      </div>
    </React.Fragment>
  );
}



export default App;
