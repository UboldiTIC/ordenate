import './CreateTaskButton.css';

function CreateTaskButton({ setOpenModal }) {
    return (
        <button className="btn btn-primary"
            onClick={
                /* (event) => {
                    alert('Create a new task!')
                    console.log(event);
                    console.log(event.target);
                } */
               () => {
                    setOpenModal(state => !state);
                    // setOpenModal(true); // Alternativa para abrir la modal.
               }
            }
        >New Task</button>
    );
}

export { CreateTaskButton };