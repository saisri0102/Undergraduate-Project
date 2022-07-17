import React, { Component } from 'react';
import UserFormPresentation from '../components/UserForm';
import store from '../store';
import { updateUsername } from '../actions/creators';

export default class FormContainer extends Component {
    updateUsername = ( username ) => {
        store.dispatch( updateUsername( username ) );
    }
    
    render() {
        return (
            <UserFormPresentation
                username={store.getState().form.username}
                updateUsername={this.updateUsername} />
        )
    }

    componentDidMount() {
        store.subscribe( () => this.forceUpdate() );
    }
}
