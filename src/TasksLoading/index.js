import React from 'react';
import './TasksLoading.css';

function TasksLoading({event, setEvent}) {
    return (
    //    <p>Cargando...</p>
        <div className="LoadingTask-container">
            <span className="LoadingTask-completeIcon"></span>
            <p className="LoadingTask-text"></p>
            <span className="LoadingTask-deleteIcon"></span>
        </div>

    );
}

export { TasksLoading };