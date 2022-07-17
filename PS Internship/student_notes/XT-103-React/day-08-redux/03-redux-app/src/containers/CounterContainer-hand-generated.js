import React, { Component } from 'react';
import CounterPresentation from '../components/Counter';
import store from '../store';

import {
    increment,
    decrement
} from '../actions/creators';

export default class CounterContainer extends Component {
    increment = ( value ) => {
        store.dispatch( increment( parseInt( value ) ) );
    }
    
    decrement = ( value ) => {
        store.dispatch( decrement( parseInt( value ) ) );
    }

    render() {
        return (
            <CounterPresentation
                value={store.getState().counter.value}
                increment={this.increment}
                decrement={this.decrement} />
        )
    }

    componentDidMount() {
        store.subscribe( () => this.forceUpdate() );
    }
}