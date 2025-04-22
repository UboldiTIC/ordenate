import React from 'react';
import './TaskSearch.css';

function TaskSearch() {

    const [event, setEvent] = React.useState('');

    console.log("Los ususarios buscan: " + event);

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