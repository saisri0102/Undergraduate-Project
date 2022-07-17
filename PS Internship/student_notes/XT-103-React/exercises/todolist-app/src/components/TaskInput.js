import React  from 'react';
import {useDispatch} from 'react-redux'
import {addTask} from '../actions/creators'
function TaskInput({placeholder, buttonText }){
    const dispatch = useDispatch();
    const inputRef = React.createRef();
    // const task = {
    //     name: inputRef.current.value,
    //     completed: false
    // }
    
    return (
        <form className="todo-input">
            <input type="text"  placeholder = {placeholder} ref= {inputRef}/>
            &nbsp;
             <button type="button" onClick={()=>dispatch(addTask({name:inputRef.current.value , completed:false}))}>{buttonText}</button> 
        </form>
    );
}

export default TaskInput;