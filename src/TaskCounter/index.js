import React from 'react';
import { TaskContext } from '../TaskContext';
import './TaskCounter.css';

function TaskCounter() {
    // Implentación de useContext para traer las props.
    const {
        completedPercentage,
        completedTasks,
        totalTasks,
    } = React.useContext(TaskContext);

    return (
        <div className='task-counter'>
            <h2>
                Tareas completadas: {completedTasks} de {totalTasks}.
            </h2>
            {completedPercentage === 100 ? (
                <h3>Felicitaciones. No tienes tareas pendientes</h3>
            ) : (
                <h3>
                    Has completado el {completedPercentage}% de {totalTasks} tareas.
                </h3>
            )}
        </div>
    );
}

export { TaskCounter };