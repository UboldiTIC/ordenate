import { CompleteIcon } from '../CompleteIcon/index.js';
import { DeleteIcon } from '../DeleteIcon/index.js';
import './TaskItem.css';

function TaskItem(props) {
    return (
        
        <li className='TaskItem'>
            <CompleteIcon 
                completed={props.completed}
                onComplete={props.onComplete}
               
            />
            
            <p className={`TaskItem-p ${props.completed && "TaskItem-p--complete"}`}> 
                {props.text} 
            </p>

            <DeleteIcon 
                onDelete={props.onDelete}
                
            />
            
        </li>
    );
}

export { TaskItem };