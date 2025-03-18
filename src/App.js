import React from 'react';
import { TaskCounter } from './TaskCounter';
import { TaskSearch } from './TaskSearch';
import { TaskList } from './TaskList';
import { TaskItem } from './TaskItem';
import { CreateTaskButton } from './CreateTaskButton';

const defaultTasks = [
  { text: 'Completar el curso.', completed: true },
  { text: 'Realizar el proyecto.', completed: true },
  { text: 'Rendir el examen.', completed: false },
  { text: 'Festejar.', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <div className="App-container">
        <h1>Lista de tareas</h1>
        <TaskCounter />
        <TaskSearch />

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
