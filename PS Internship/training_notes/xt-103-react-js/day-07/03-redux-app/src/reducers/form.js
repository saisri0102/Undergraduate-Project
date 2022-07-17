import {
    UPDATE_USERNAME
} from '../actions/constants';

function formReducer( curState = { username : '' }, action ) {
    let newState;

    console.log( action );

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

    console.log( newState );

    return newState;
}

export default formReducer;