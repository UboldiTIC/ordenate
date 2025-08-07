import { TaskCounter } from '../TaskCounter';
import { TaskSearch } from '../TaskSearch';
import { TaskList } from '../TaskList';
import { TaskItem } from '../TaskItem';
import { CreateTaskButton } from '../CreateTaskButton';
import { TasksLoading } from '../TasksLoading';
import { TasksError } from '../TasksError';
import { EmptyTasks } from '../EmptyTasks';
import React from 'react';
import { Modal } from '../Modal';
import { TaskContext } from '../TaskContext';
import { TaskForm } from '../TaskForm';

function AppUI() {
    const {
        loading,
        error,
        searchedTasks,
        completeTask,
        deleteTask,
        openModal,
        setOpenModal,
    } = React.useContext(TaskContext);
    
    return ( 
        <React.Fragment>
            <div className="App-container">
                <h1>Mis Tareas</h1>
                <TaskCounter />
                <TaskSearch />
                <div className="TaskList-container">
                    <TaskList>
                        {loading && (
                            <>
                                <TasksLoading />
                                <TasksLoading />
                                <TasksLoading />
                            </>
                        )}
                        {error && <TasksError />}
                        {(!loading && searchedTasks.length === 0) && <EmptyTasks />}
                        {searchedTasks.map((task) => (
                            <TaskItem
                                key={task.text}
                                text={task.text}
                                completed={task.completed}
                                onComplete={() => completeTask(task.text)} // Función a TaskItem - No confundir con completedTasks.
                                onDelete={() => deleteTask(task.text)}
                            />
                            
                        ))}
                    </TaskList>
                </div>
                {/* Botón para crear una nueva tarea */}
                <CreateTaskButton 
                    setOpenModal={setOpenModal}
                />

                {openModal && (
                    <Modal>
                        <TaskForm />
                    </Modal>
                )}
            </div>
        </React.Fragment>
    );
}

export { AppUI };