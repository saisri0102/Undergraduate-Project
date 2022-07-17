import {ADD_TASK , DELETE_TASK} from './constants'

function addTask( task ){
    return{
        type: ADD_TASK,
        payload:{
            task
        }
    }
}
function deleteTask( index ){
    return{
        type: DELETE_TASK,
        payload:{
            index
        }
    }
}

export {
    addTask,
    deleteTask
}