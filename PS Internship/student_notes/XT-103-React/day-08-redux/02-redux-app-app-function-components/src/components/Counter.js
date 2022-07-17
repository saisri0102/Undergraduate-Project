import React, { createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    increment,
    decrement
} from '../actions/creators';

import { selectValue } from '../reducers/counter';

function Counter() {
    let inputRef = createRef();

    const dispatch = useDispatch();
    const value = useSelector( selectValue );

    return (
        <React.Fragment>
            <button onClick={() => dispatch( decrement( parseInt( inputRef.current.value ) ) )}>-</button>
            <input type="number" ref={inputRef} defaultValue="1" />
            <span id="counter">{value}</span>
            <button onClick={() => dispatch( increment( parseInt( inputRef.current.value ) ) )}>+</button>
        </React.Fragment>
    );
}

export default Counter;