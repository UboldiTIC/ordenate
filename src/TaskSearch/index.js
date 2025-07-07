import React from 'react';
import './TaskSearch.css';
import { TaskContext } from '../TaskContext';

function TaskSearch() {
    // el evento onChange recibe un evento como parámetro
    // y el valor del input es event.target.value
    // el valor del input es un string vacío.
    const {
        event,
        setEvent,
    } = React.useContext(TaskContext);
    
    return (
        <div>
            <input 
                type="text" 
                placeholder="Buscar tarea"
                value={event}
                onChange={(event) => {
                    setEvent(event.target.value);
                }}
            />
        </div>
    );
}

export { TaskSearch };