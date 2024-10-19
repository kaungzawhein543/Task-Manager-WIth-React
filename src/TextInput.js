import {useState,useContext} from "react";
import {TaskContext} from "./TaskContext";


function TextInput(props){
    const [newTask, setNewTask] = useState("");
    const [newStartTime, setStartTime] = useState("");
    const [newEndTime, setEndTime] = useState("");
    const [error, setError] = useState("");
    const {dispatch} = useContext(TaskContext);

    const handleAddTask = (e) => {
        e.preventDefault();
        if(newTask.trim() === ""){
            setError("Task Name is required");
        }
        if(newStartTime.length === 0){
            setError("Start Time is required");
        }
        if(newEndTime.length === 0){
            setError("End Time is required");
        }
        if (newStartTime >= newEndTime) {
            setError("End time must be after start time.");
            return;
        }
        const formattedStartTime = formatTime(newStartTime);
        const formattedEndTime = formatTime(newEndTime);

            dispatch({type:"ADD_TASK",payload:newTask,startTime:formattedStartTime,endTime:formattedEndTime});
            setNewTask("");
            setStartTime("");
            setEndTime("");
    }

    const formatTime = (time) =>{
        const [hours,minutes] = time.split(":");
        let formattedHour = parseInt(hours,10);
        const ampm =formattedHour >= 12 ? "PM" : "AM";

        formattedHour = formattedHour % 12 || 12;

        return `${formattedHour}:${minutes} ${ampm}`;
    }
    const handleInput = ()=>{
        if(newTask && newStartTime && newEndTime){
            setError("");
        }
    }

    return (
        <div >
            <div className={"parent"}>
                <div className={"Task_Name"}>
                    <label htmlFor="taskName"><span style={{color: "red"}}>*</span>Task Name</label>
                    <input type="text" value={newTask} onChange={(e) => {setNewTask(e.target.value); handleInput()}}
                           placeholder="Enter a new task"/>
                </div>
                <div style={{width: "100px", marginLeft: "10px"}}>
                    <label htmlFor="startTime"><span style={{color: "red"}}>*</span>Start Time</label>
                    <input value={newStartTime} style={{height: "35px"}} type="time" name="start" id="startTime" onChange={(e) => { setStartTime(e.target.value); handleInput(); }}/>
                </div>
                <div style={{width: "100px"}}>
                    <label htmlFor="endTime"><span style={{color: "red"}}>*</span>End Time</label>
                    <input value={newEndTime} style={{height: "35px"}} type="time" name="end" id="endTime"  onChange={(e) => { setEndTime(e.target.value); handleInput(); }}/>
                </div>
                <div>
                    <button style={{marginTop: "18px"}} onClick={handleAddTask}>Add Task</button>
                </div>
            </div>
            {error && <div style={{
                background: "#f8d7da",
                padding:"20px",
                color: "#8d2e36",
                borderRadius: "10px",
                display: 'block',
                marginTop: "10px",
            }}>{error} <span style={{color:"black",textAlign:"right",float:"right",cursor:"pointer"}}>X</span></div>}
        </div>
    )
}

export default TextInput;