import React from 'react';
import { TaskCounter } from './TaskCounter';
import { TaskSearch } from './TaskSearch';
import { TaskList } from './TaskList';
import { TaskItem } from './TaskItem';
import { CreateTaskButton } from './CreateTaskButton';

const defaultTasks = [
  { text: 'Completar el curso.', completed: true },
  { text: 'Realizar el proyecto.', completed: false },
  { text: 'Rendir el examen.', completed: false },
  { text: 'Festejar.', completed: false },
  { text: 'Averiguar fecha.', completed: true },
];

function App() {

  // CREAMOS UN ESTADO para las tareas a partir de useState
  // el valor inicial del estado es un array de objetos
  // cada objeto tiene una propiedad text y completed
  // el valor de la propiedad text es un string
  // el valor de la propiedad completed es un booleano.
  const [tasks, setTasks] = React.useState(defaultTasks);

  // CREAMOS UN ESTADO para el evento a partir de useState
  // el valor inicial del estado es un string vacío
  // este estado va a ser reutilizado en TaskSearch
  // y en el console.log de App.
  // es importante tener en cuenta que este estado va a actualizarse a partir del evento onChange.
  // el evento onChange va a recibir un evento como parámetro.
  const [event, setEvent] = React.useState('');

  console.log("Los ususarios buscan: " + event);

  // Estados Derivados: a partir de estados ya existentes, nos permiten realizar cálculos.
  const completedTasks = tasks.filter(task => !!task.completed).length;
  const totalTasks = tasks.length;
  const completedPercentage = (completedTasks / totalTasks) * 100;
  // Estado Derivado para filtrar las tareas:
  const searchedTasks = tasks.filter(
    (task) => {
      return task.text.includes(event);
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
          {defaultTasks.map((task) => (
            <TaskItem
              key={task.text}
              text={task.text}
              completed={task.completed}
            />
          ))}
        </TaskList>
        
        <CreateTaskButton />
      </div>
    </React.Fragment>
  );
}



export default App;
