import React from 'react';
import TaskInput from './TaskInput'

import TaskList from './TaskList'
function TodoList(props) {
    return (
        <div className= "todo-app">
            <TaskInput placeholder="Task Name" buttonText="Add" />
            <TaskList />
        </div>
    );
}

export default TodoList;