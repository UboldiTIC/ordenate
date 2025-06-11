import './TaskList.css';

function TaskList(props) {
    return (
        <ul>
            {props.children}
        </ul>
    );
}

export { TaskList };