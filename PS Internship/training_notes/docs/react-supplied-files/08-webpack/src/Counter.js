import React from 'react';

class Counter extends React.Component {
    state = {
        counter: this.props.counter
    };

    incrementCounter = () => {
        this.setState(curState => ({
            counter: curState.counter + 1
        }), () => this.props.updateCounter( this.state.counter ) );
    }
    
    decrementCounter = () => {
        this.setState(curState => ({
            counter: curState.counter - 2
        }), () => this.props.updateCounter( this.state.counter ) );
    }

    render() {
        return (
            <div>
                Counter : {JSON.stringify( this.state.counter )}
                <br />
                <button onClick={this.incrementCounter}>+</button>
                <button onClick={this.decrementCounter}>-</button>
            </div>
        );
    }
}

export default Counter;