import {UPDATE_USERNAME} from '../actions/constants'
function formReducer( curState = { username : '' }, action ) {
    let newState;
    switch( action.type ) {
        case UPDATE_USERNAME:
            newState = {
                username: action.payload.username
            }
        break
        default:
            newState = curState; // make no changes
    }

    console.log( newState );

    return newState;
}

export default formReducer