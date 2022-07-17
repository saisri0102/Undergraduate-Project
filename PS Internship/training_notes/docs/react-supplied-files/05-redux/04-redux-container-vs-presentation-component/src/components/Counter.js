// Modify this to a presentation component (it is ideally a function component) - the evnt handlers will dispatch via appropriate props, and state will be available in props

import React from 'react';
import { incrementAC, decrementAC } from '../actions/creators';
import store from '../store';

export default class Counter extends React.Component {
    constructor( props ) {
        super( props );
    }

    increment = () => {
        store.dispatch( incrementAC() );
    }

    decrement = () => {
        store.dispatch( decrementAC() );
    }

    render() {
        return (
            <div>
                <span>{store.getState().counter.value}</span>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }

    componentDidMount() {
        store.subscribe( this.forceUpdate.bind( this ) );
    }
}