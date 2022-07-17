import React from 'react';
import logo from '../../images/user2.png'
function Card({repo}) {
    return (
        <div>          
            <div className="card p-3 mb-3 rounded ">
                <div className="row">
                    <div className="col-10" >
                        <div>
                            Repo Name : {repo.name}
                        </div> 
                        <div>
                                Owner Name : {repo.owner.login}
                        </div>
                    </div>
                    <div className="col-2">
                        <img src={logo} alt="user_logo" width="100px"/>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default Card;