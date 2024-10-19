import {useContext} from "react";
import {TaskContext} from "./TaskContext";

function TaskList(props){
    const {state, dispatch} = useContext(TaskContext);
    const {tasks} = state;


    return(
        <ul>
            {tasks.length === 0 ? (
                <p style={{textAlign:"center"}}>No Tasks</p>
            ):(
                tasks.map((task, index) =>{
                    return(
                        <li key={index} style={{textDecoration: task.completed ? "line-through" : "none"}}>
                            <div>
                                <input id={index} checked={task.completed} type="checkbox"
                                       onChange={() => dispatch({type:'TOGGLE_TASK',payload:index})}/>
                                <label htmlFor={index}>{task.text}</label>
                            </div>
                            <p style={{marginLeft:"auto"}}>From : <span style={{color:"#306ccf"}}>{task.startTime}</span> To : <span style={{color:"#c21123"}}>{task.endTime}</span></p>
                            <button onClick={() => dispatch({type:'REMOVE_TASK',payload:index})}>Delete</button>
                        </li>
                    );
                })
            )}
        </ul>
    );
}

export default TaskList;
