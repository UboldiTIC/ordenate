import React from "react";
import { TaskIcon } from "./TaskIcon";

function DeleteIcon({ onDelete }) {
    return (

        <TaskIcon
            type="delete"
            color="gray"
            onClick={onDelete}
        />
    );
}

export { DeleteIcon };