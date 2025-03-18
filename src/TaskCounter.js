import './TaskCounter.css';

function TaskCounter({ totalTasks, completedTasks }) {
    return (
        <h2>
            Has completado {completedTasks} de {totalTasks} tareas.
        </h2>
    );
}

export { TaskCounter };