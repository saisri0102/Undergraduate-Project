import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {updateUsername} from '../actions/creators'

import {selectUserValue} from '../reducers/form'
function UserForm () {

    const dispatch = useDispatch()
    const username = useSelector(selectUserValue)
    return (
        <React.Fragment>
            <input type="text" onChange = {(event)=> dispatch(updateUsername( event.target.value))  } 
            value= {username}/>
            <span>{username}</span>
        </React.Fragment>
    );
}

export default UserForm