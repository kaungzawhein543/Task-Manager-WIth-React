function TaskList(props){
    return(
        <ul>
            {props.tasks.length === 0 ? (
                <p>No Tasks</p>
            ):(
                props.tasks.map((task, index) =>{
                    return(
                    <li key={index} style={{textDecoration: task.completed ? "line-through": "none"}}>
                        <div>
                            <input id={index} checked={task.completed} type="checkbox" onChange={()=>props.handleToggleComplete(index)}/>
                            <label for={index}>{task.text}</label>
                        </div>
                        <button onClick={() => props.handelDeleteTask(index)}>Delete</button>
                    </li>
                    );
                })
            )}
        </ul>
    );
}

export default TaskList;
