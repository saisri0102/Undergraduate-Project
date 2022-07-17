import React from 'react'
import store from '../store'
import {increment , decrement} from '../actions/creators'
class Counter extends React.Component {
    valueRef = React.createRef()
    render() {
        /*
            Disadvantages : Get renders even if Form state changes without any change in counter
        */
         return (
            <React.Fragment>
                <button onClick={() => store.dispatch( decrement(this.valueRef.current.value) )}>-</button>
                <span id="counter">{store.getState().counter.value}</span>
                <input type="text" placeholder="counter value" defaultValue="5" ref= {this.valueRef}/>
                <button onClick={() => store.dispatch( increment(this.valueRef.current.value) )}>+</button>
            </React.Fragment>
        );
    }

    componentDidMount() {
        store.subscribe( () => this.forceUpdate() );
    }
}

export default Counter