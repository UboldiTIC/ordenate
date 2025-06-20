import { TaskCounter } from '../TaskCounter';
import { TaskSearch } from '../TaskSearch';
import { TaskList } from '../TaskList';
import { TaskItem } from '../TaskItem';
import { CreateTaskButton } from '../CreateTaskButton';
import { TasksLoading } from '../TasksLoading';
import { TasksError } from '../TasksError';
import { EmptyTasks } from '../EmptyTasks';
import React from 'react';

function AppUI({
    loading,
    error,
    completedTasks,
    totalTasks,
    completedPercentage,
    setEvent,
    searchedTasks,
    completeTask,
    deleteTask,
    event,
    }) {
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
             {/* => Los reemplazamos por loading skeletons o placeholders.   
            {loading && <p>Estamos cargando...</p>}
            {error && <p>Error de carga, vuelve a intentar en un momento...</p>} */}
            {loading && <TasksLoading />}
            {error && <TasksError />}
            {(!loading && searchedTasks.length === 0) && <EmptyTasks />}
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

export { AppUI };