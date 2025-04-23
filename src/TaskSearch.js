import React from 'react';
import './TaskSearch.css';

function TaskSearch({event, setEvent}) {
    // el evento onChange recibe un evento como parámetro
    // y el valor del input es event.target.value
    // el valor del input es un string vacío.
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