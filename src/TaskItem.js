import './TaskItem.css';

function TaskItem(props) {
    return (
        
        <li className='TaskItem'>
            <span 
                onClick={props.onComplete}
            >
                V
            </span>
            <p> {props.text} </p>
            <span
                onClick={props.onDelete}
            >
                X
            </span>
        </li>
    );
}

export { TaskItem };