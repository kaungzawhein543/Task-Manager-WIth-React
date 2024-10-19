
export const initialState = {
    tasks: localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []
};

export const taskReducer = (state , action) => {
    switch (action.type){
        case 'ADD_TASK':
            const task = {
                text: action.payload,
                completed: false,
                startTime: action.startTime,
                endTime: action.endTime
            };

            const updatedTasks = [...state.tasks, task];
            console.log(action.startTime , action.endTime);
            // Update local storage with the new task
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));

            return {
                ...state,
                tasks: updatedTasks
            };
        case 'TOGGLE_TASK':
            return{
                ...state,
                tasks: state.tasks.map((task,index) => {
                    return index === action.payload ? {...task,completed: !task.completed} : task
                })
            }
        case 'REMOVE_TASK':
            const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const updateTasks = storedTasks.filter((_,index)=>{
                return index !== action.payload;
            });
            console.log(JSON.stringify(updateTasks))
            localStorage.setItem('tasks',JSON.stringify(updateTasks));
            return {
                ...state,
                tasks: state.tasks.filter((_,index)=>{
                    return index !== action.payload;
                })
            }
        default:
            return state;
    }
}