import React from 'react'

class UserForm extends React.Component {

    render() {
        // console.log('render');
        const {username , updateUsername} = this.props
        return (
            <React.Fragment>
                <input type="text" onChange = {(event)=> updateUsername( event.target.value)  } 
                value= {username}/>
                <span>{username}</span>
            </React.Fragment>
        );
    }

}

export default UserForm