import {
    ADD_TASK,
    DELETE_TASK
} from '../actions/constants'

let initalState = {
    tasks : [
        {
            name: 'Buy Milk',
            completed:true,
           
        },
        {
            name: 'Learn React',
            completed:false,
           
        }
    ]
}
function todoListReducer(curState = initalState , action){
    let newState, newTasks
    switch(action.type){
        case ADD_TASK:
            newTasks = [...curState.tasks];
            newTasks.push(action.payload.task);
            newState = {
                tasks: newTasks
            }
            
            break;
        case DELETE_TASK:
            newTasks = [...curState.tasks];
            console.log(action.payload.index)
            newTasks.splice(action.payload.index , 1)
            newState = {
                tasks: newTasks
            }
            break;
        default:
            newState = curState;
            break
    }
    console.log(newState)
    return newState

}

export function getTasks( state ){
    
    return state.todoList
    
}
export default todoListReducer