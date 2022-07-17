import React, { Component, createRef } from 'react';
import store from '../store';
import {
    increment,
    decrement
} from '../actions/creators';

class Counter extends Component {
    inputRef = createRef();

    render() {
        return (
            <React.Fragment>
                <button onClick={() => store.dispatch( decrement( parseInt( this.inputRef.current.value ) ) )}>-</button>
                <input type="number" ref={this.inputRef} defaultValue="1" />
                <span id="counter">{store.getState().counter.value}</span>
                <button onClick={() => store.dispatch( increment( parseInt( this.inputRef.current.value ) ) )}>+</button>
            </React.Fragment>
        );
    }

    componentDidMount() {
        store.subscribe( () => this.forceUpdate() );
    }
}

export default Counter;