import React from 'react';
import {useSelector} from 'react-redux'
import TaskItem from './TaskItem'
import {getTasks} from '../reducers/todoListReducer'
function TaskList (){
    //console.log(useSelector(getTasks)
    let {tasks} = useSelector( getTasks);
    console.log(tasks);
    return (
        <React.Fragment>
            <ol className="todo-list">
                { tasks.map( (task , idx) => <TaskItem {...task} index = {idx}  key = {idx}/>)}
            </ol>
        </React.Fragment>
    )
}

export default TaskList;