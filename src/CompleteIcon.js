import React from "react";
import { TaskIcon } from "./TaskIcon";

function CompleteIcon({ completed, onComplete }) {
    return (
        
        <TaskIcon 
            type="check"
            color={completed ? 'green' : 'gray'}
            onClick={onComplete}
        />
        
    );
}

export { CompleteIcon };