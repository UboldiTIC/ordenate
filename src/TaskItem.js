import './TaskItem.css';

function TaskItem(props) {
    return (
        
        <li className='TaskItem'>
            <CompleteIcon />
            {/* <span 
                onClick={props.onComplete}
            >
                V
            </span> */}
            <p> {props.text} </p>
            <DeleteIcon />
            {/* <span
                onClick={props.onDelete}
            >
                X
            </span> */}
        </li>
    );
}

export { TaskItem };