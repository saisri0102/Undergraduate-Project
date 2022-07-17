// EXERCISE: Break this into presentation and container components and let me presentation component receive the required state data and the required function(s) to dispatch action(s) as props
import React, { Component } from 'react';

class UserForm extends Component {
    render() {
        const { username, updateUsername } = this.props;

        return (
            <React.Fragment>
                <input type="text" name="username" onChange={( event ) => updateUsername( event.target.value )} value={username} />
                {username}
            </React.Fragment>
        );
    }
}

export default UserForm;