import React from 'react'
import store from '../store'
import {updateUsername} from '../actions/creators'

class UserForm extends React.Component {
    render() {
        return (
            <React.Fragment>
                <input type="text" onChange = {(event)=> store.dispatch( updateUsername( event.target.value) ) }
                value= {store.getState().form.username}/>
            </React.Fragment>
        );
    }

    componentDidMount() {
        store.subscribe( () => this.forceUpdate() );
    }
}

export default UserForm