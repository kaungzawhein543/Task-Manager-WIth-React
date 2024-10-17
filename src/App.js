import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';
import TextInput from "./TextInput";
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleAddTask = () => {
        if (newTask.trim() === "") return;
        setTasks([...tasks, {text: newTask, completed: false}]);
        setNewTask("");
    }

    const handleToggleComplete = (index) => {
        const updatetasks = tasks.map((task,i) => {
          return  i === index ? {...task, completed: !task.completed} : task
        })
        setTasks(updatetasks);
    }

    const handelDeleteTask = (index) => {
        const updateTasks = tasks.filter((_,i) => {
            return i !== index;
        })
        setTasks(updateTasks);
    }
    return (
        <div className="App">
            <h1>Task Manager</h1>
            <TextInput handleAddTask={handleAddTask} newTask={newTask} setNewTask={setNewTask}/>
            <TaskList tasks={tasks} handleToggleComplete={handleToggleComplete} handelDeleteTask={handelDeleteTask}/>
        </div>
    );
}

export default App;
