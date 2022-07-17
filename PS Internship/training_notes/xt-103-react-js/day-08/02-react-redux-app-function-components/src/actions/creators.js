import {
    INCREMENT,
    DECREMENT,
    UPDATE_USERNAME
} from './constants';

// action creators
function increment( amount ) {
    return {
        type: INCREMENT,
        payload: {
            amount
        }
    };
}

function decrement( amount ) {
    return {
        type: DECREMENT,
        payload: {
            amount
        }
    };
}

function updateUsername( username ) {
    return {
        type: UPDATE_USERNAME,
        payload: {
            username
        }
    };
}

export {
    increment,
    decrement,
    updateUsername
};