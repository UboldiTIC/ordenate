import React from "react";
import { TaskIcon } from "../TaskIcon/index.js";

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