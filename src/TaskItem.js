import './TaskItem.css';

function TaskItem(props) {
    return (
        <li className='TaskItem'>
            <span>V</span>
            <p> {props.text} </p>
            <span>X</span>
        </li>
    );
}

export { TaskItem };