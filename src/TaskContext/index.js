import React from "react";
import { useLocalStorage } from './useLocalStorage.js';

const TaskContext = React.createContext();

function TaskProvider( { children  }) {

    const {
    item: tasks, // Aquí se guarda el array de tareas.
    saveItem: saveTasks, // Aquí se guarda la función para actualizar el array de tareas.
    loading,
    error,
   } = useLocalStorage('TASK_V1', []); // el valor inicial es un array vacío.

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
        <TaskContext.Provider value={{
            loading,
            error,
            completedTasks,
            totalTasks,
            completedPercentage,
            event,
            setEvent,
            searchedTasks,
            completeTask,
            deleteTask,
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export { TaskContext, TaskProvider };