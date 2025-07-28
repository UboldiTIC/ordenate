import React from "react";
import { TaskContext } from "../TaskContext";
import './TaskForm.css';

function TaskForm() {
    const {
        //addTask,
        setOpenModal,
    } = React.useContext(TaskContext);
    
    const onSubmit = (event) => {
        event.preventDefault();
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }
    
    return (
        <form onSubmit={onSubmit}>  
            <label>Escribe una nueva tarea</label>
            <textarea 
                placeholder="Agregar una nueva tarea"
            />
            <div className="TaskForm-buttonContainer">
                <button
                    type="button"
                    className="TaskForm-button TaskForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    type="submit"
                    className="TaskForm-button TaskForm-button--add"
                >Añadir</button>
            </div>
        </form>
    );
}

export { TaskForm };