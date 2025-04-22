import './CreateTaskButton.css';

function CreateTaskButton() {
    return (
        <button className="btn btn-primary"
            onClick={
                (event) => {
                    alert('Create a new task!')
                    console.log(event);
                    console.log(event.target);
                }
            }
        >New Task</button>
    );
}

export { CreateTaskButton };