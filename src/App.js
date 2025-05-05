import React from 'react';
import { TaskCounter } from './TaskCounter';
import { TaskSearch } from './TaskSearch';
import { TaskList } from './TaskList';
import { TaskItem } from './TaskItem';
import { CreateTaskButton } from './CreateTaskButton';
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

  // CREAMOS UN ESTADO para las tareas a partir de useState
  // el valor inicial del estado es un array de objetos
  // cada objeto tiene una propiedad text y completed
  // el valor de la propiedad text es un string
  // el valor de la propiedad completed es un booleano.
  
  // const [tasks, setTasks] = React.useState(defaultTasks);


  // CREAMOS UN ESTADO para las tareas a partir de useState usando localStorage.

  const localStorageTasks = localStorage.getItem('TASK_V1');
  let parsedTasks;

  if (!localStorageTasks) {
    localStorage.setItem('TASK_V1', JSON.stringify([]));
    parsedTasks = [];
  }
  else {
    parsedTasks = JSON.parse(localStorageTasks);
  }
  // Guardamos el valor de localStorage en el estado tasks.

 
  const [tasks, setTasks] = React.useState(parsedTasks);
  //const [searchValue, setSearchValue] = React.useState('');

  // CREAMOS UN ESTADO para el evento a partir de useState
  // el valor inicial del estado es un string vacío
  // este estado va a ser reutilizado en TaskSearch
  // y en el console.log de App.
  // es importante tener en cuenta que este estado va a actualizarse a partir del evento onChange.
  // el evento onChange va a recibir un evento como parámetro.
  const [event, setEvent] = React.useState('');
  console.log("Los ususarios buscan: " + event);

  // CRUD: vamos a actualizar el estado y localStorage con la siguiente función:

  const saveTasks = (newTasks) => {
    localStorage.setItem('TASK_V1', JSON.stringify(newTasks));

    setTasks(newTasks);
  }


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
