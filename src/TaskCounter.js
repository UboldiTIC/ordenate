import './TaskCounter.css';

function TaskCounter({ totalTasks, completedTasks }) {
    return (
        <h1>
            Has completado {completedTasks} de {totalTasks} tareas.
        </h1>
    );
}

export { TaskCounter };