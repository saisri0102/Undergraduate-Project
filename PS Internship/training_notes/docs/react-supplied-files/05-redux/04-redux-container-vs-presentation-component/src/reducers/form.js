import { UPDATE_NAME } from '../actions/constants';

function formReducer( curState = { name : '' }, action ) {
    let newState;

    switch( action.type ) {
        case UPDATE_NAME:
            newState = { ...curState, name: action.payload.value };
            break;
        default:
            newState = curState;
    }

    return newState;
}

export default formReducer;