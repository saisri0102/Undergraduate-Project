import React, { Component, createRef } from 'react';


class Counter extends Component {
    inputRef = createRef();

    render() {
        console.log('render');
        const { increment, decrement, value } = this.props;

        return (
            <React.Fragment>
                <button onClick={() => decrement( parseInt( this.inputRef.current.value ) )}>-</button>
                <input type="number" ref={this.inputRef} defaultValue="1" />
                <span id="counter">{value}</span>
                <button onClick={() => increment( parseInt( this.inputRef.current.value ) )}>+</button>
            </React.Fragment>
        );
    }
}

export default Counter;