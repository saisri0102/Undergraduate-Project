import {INCREMENT , DECREMENT} from '../actions/constants'
function counterReducer( curState = { value : 0 }, action ) {
    let newState;

    switch( action.type ) {
        case INCREMENT:
            newState = {
                ...curState,
                value: curState.value + action.payload.value
            };
            break;
        case DECREMENT:
            newState = {
                ...curState,
                value: curState.value - action.payload.value
            };
            break;
        default:
            newState = curState; // make no changes
    }

    console.log( newState );

    return newState;
}

// Selectors
export function selectValue( state ) {
    return state.counter.value;
}

export default counterReducer