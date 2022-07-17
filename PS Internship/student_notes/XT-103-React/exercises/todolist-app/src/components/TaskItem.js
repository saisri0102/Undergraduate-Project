import React   from 'react';
import {useDispatch} from 'react-redux'
import {deleteTask} from '../actions/creators'

function TaskItem({name, completed, index }) {

    const dispatch = useDispatch();
    return (

        <li>
            <label htmlFor="completed-box">
            <input type= "checkbox" id="completed-box"  checked = {completed}/>
            &nbsp;
            {name}
            </label>
            <button onClick = {()=>dispatch(deleteTask(index))}>Delete</button>
        </li>   
    );
}

export default TaskItem;