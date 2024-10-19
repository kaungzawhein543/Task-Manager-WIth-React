import './App.css';
import TaskList from './TaskList';
import TextInput from "./TextInput";
import {TaskProvider} from "./TaskContext";

function App() {

    return (
        <TaskProvider>
            <div className="App">
                <h1>Task Manager</h1>
                <TextInput/>
                <TaskList/>
            </div>
        </TaskProvider>
    );
}

export default App;
