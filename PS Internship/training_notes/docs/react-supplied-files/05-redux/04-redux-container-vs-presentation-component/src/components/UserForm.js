// Modify this to a presentation component (it is ideally a function component) - the evnt handlers will dispatch via appropriate props, and state will be available in props

import React from 'react';
import store from '../store';
import { updateNameAC } from '../actions/creators';

// set this up as a controlled component
export default class UserForm extends React.Component {
    render() {
        return (
            <div>
                {/* add code to dispatch action on change of name, and set value form state on update of name */}
                Name: <input type="text" id="name" onChange={( event ) => store.dispatch( updateNameAC( event.target.value ))} />
                {store.getState().form.name}
            </div>
        );
    }

    // subscribe on component mount, to enable forceUpdate
    componentDidMount() {
        store.subscribe( this.forceUpdate.bind( this ) );
    }
}