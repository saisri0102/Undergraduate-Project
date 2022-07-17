import {INCREMENT , DECREMENT} from '../actions/constants'
function counterReducer( curState = { value : 0 }, action ) {
    let newState;

    switch( action.type ) {
        case INCREMENT:
            newState = {
                ...curState,
                value: curState.value + parseInt(action.payload.value, 10)
            };
            break;
        case DECREMENT:
            newState = {
                ...curState,
                value: curState.value - parseInt(action.payload.value, 10)
            };
            break;
        default:
            newState = curState; // make no changes
    }

    console.log( newState );

    return newState;
}

export default counterReducer