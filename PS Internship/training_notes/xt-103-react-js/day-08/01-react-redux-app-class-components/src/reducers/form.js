import {
    UPDATE_USERNAME
} from '../actions/constants';

function formReducer( curState = { username : '' }, action ) {
    let newState;

    switch( action.type ) {
        case UPDATE_USERNAME:
            newState = {
                ...curState,
                username: action.payload.username
            };
            break;
        default:
            newState = curState;
    }

    return newState;
}

export default formReducer;