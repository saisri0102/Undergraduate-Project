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
                <span>{store.getState().value}</span>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }

    componentDidMount() {
        store.subscribe( this.forceUpdate.bind( this ) );
    }
}