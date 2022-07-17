import React, { Component } from 'react'
import store from '../store'
import FormPresentation from '../components/UserForm'
import {updateUsername} from '../actions/creators'
export default class FormContainer extends Component {

    updateUsername = (username) =>{
        store.dispatch(updateUsername(username))
    }
    render() {
        return (
            <div>
                <FormPresentation 
                    updateUsername = {this.updateUsername}
                    username = {store.getState().form.username}
                />
            </div>
        )
    }

    componentDidMount() {
        store.subscribe( () => this.forceUpdate() );
    }
}

