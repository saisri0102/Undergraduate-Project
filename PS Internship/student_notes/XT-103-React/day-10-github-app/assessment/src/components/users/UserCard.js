import React from 'react';
import logo from '../../images/user2.png'
function UserCard({user}) {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-10">
                    <div>
                        User Name : {user.login}
                    </div> 
                    <div>
                        No.of Public Repos : {user.public_repos}
                    </div>
                </div>
                <div className="col-2">
                    <img src={logo} alt="user_logo" width="100px"/>
                </div>
             </div>
        </React.Fragment>
    );
}

export default UserCard;