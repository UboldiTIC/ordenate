import { TaskCounter } from './TaskCounter';
import { TaskSearch } from './TaskSearch';
import { TaskList } from './TaskList';
import { TaskItem } from './TaskItem';
import { CreateTaskButton } from './CreateTaskButton';
import './App.css';

function App() {
  return (
    <div className="App">

      <TaskCounter />
      <TaskSearch />

      <TaskList>

        <TaskItem />
        <TaskItem />
        <TaskItem />
        
      </TaskList>
      
      <CreateTaskButton />

    </div>
  );
}



export default App;
