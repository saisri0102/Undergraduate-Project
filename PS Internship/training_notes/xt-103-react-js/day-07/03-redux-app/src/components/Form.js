import React, { Component } from 'react';
import store from '../store';
import { updateUsername } from '../actions/creators';

class UserForm extends Component {
    render() {
        return (
            <React.Fragment>
                <input type="text" name="username" onChange={( event ) => store.dispatch( updateUsername( event.target.value ) )} value={store.getState().form.username} />
                {store.getState().form.username}
            </React.Fragment>
        );
    }

    componentDidMount() {
        store.subscribe( () => this.forceUpdate() );
    }
}

export default UserForm;