// EXERCISE: Use useDispatch and useSelector and dispatch actions, and receive state updates (using the useSelector hooks causes the function to re-render on state updates)
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    updateUsername
} from '../actions/creators';

import { selectUsername } from '../reducers/form';

function UserForm()  {
    const dispatch = useDispatch();
    const username = useSelector( selectUsername );

    return (
        <React.Fragment>
            <input type="text" name="username" onChange={( event ) => dispatch( updateUsername( event.target.value ) )} value={username} />
            {username}
        </React.Fragment>
    );
}

export default UserForm;