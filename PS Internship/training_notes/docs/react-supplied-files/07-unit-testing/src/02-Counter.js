import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState(curState => ({
            count: curState.count + 1
        }));
    }
    
    decrement = () => {
        this.setState(curState => ({
            count: curState.count - 1
        }));
    }

    render() { 
        return ( 
            <div>
                Counter: <span id="counter">{this.state.count}</span>
                <button id="decrement" onClick={this.decrement}>-</button>
                <button id="increment" onClick={this.increment}>+</button>
            </div>
        );
    }
}
 
export default Counter;