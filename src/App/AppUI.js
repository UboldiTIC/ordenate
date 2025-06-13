import { TaskCounter } from '../TaskCounter';
import { TaskSearch } from '../TaskSearch';
import { TaskList } from '../TaskList';
import { TaskItem } from '../TaskItem';
import { CreateTaskButton } from '../CreateTaskButton';
import React from 'react';

function AppUI({
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