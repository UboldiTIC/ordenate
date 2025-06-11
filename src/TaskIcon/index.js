import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TaskIcon.css';
import React from "react";

const iconTypes = {
    "check": (color) => <CheckSVG className="Icon-svg" fill={color} />,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

function TaskIcon({ type, color, onClick }) {
    return (
            <span
                className={`Icon-container Icon-container-${type}`}
                onClick={onClick}
            >
            {iconTypes[type](color)}
            </span>
        );
    }
    
export { TaskIcon };