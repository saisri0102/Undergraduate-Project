import {
    INCREMENT,
    DECREMENT
} from '../actions/constants';

function counterReducer( curState = { value : 0 }, action ) {
    let newState;

    switch( action.type ) {
        case INCREMENT:
            newState = {
                ...curState,
                value: curState.value + action.payload.amount
            };
            break;
        case DECREMENT:
            newState = {
                ...curState,
                value: curState.value - action.payload.amount
            };
            break;
        default:
            newState = curState;
    }

    return newState;
}

export default counterReducer;