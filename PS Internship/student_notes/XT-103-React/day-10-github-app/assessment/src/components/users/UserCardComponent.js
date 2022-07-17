import React from 'react';
import {Link , Route } from 'react-router-dom'

import UserDetails from './UserDetails';
import UserCard from './UserCard'
function UserCardComponent({ details }) {

    

    console.log(details)
    console.log(typeof details )
    console.log(details.length)
    return (
        <div>
            <h2>Users</h2>
            
            <hr /> 
            {
                details.length > 1 ? 
                details.map (user =>(
                    <div className="card p-3 rounded mb-3">
                        <UserCard user = {user} />
                        <Link to= {"/users/" + user.login}>Show More Details</Link>  
                    </div>
                ))
                :
                <div className="card p-3 rounded">
                    <UserCard user = {details} />
                    <Link to= {"/users/" + details.login}>Show More Details</Link> 
                </div>
            }
            
        </div>     
    );
}

export default UserCardComponent;