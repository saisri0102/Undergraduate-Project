import { INCREMENT, DECREMENT, UPDATE_NAME } from './constants';

function incrementAC() {
    return {
        type: INCREMENT
    };
} 

function decrementAC() {
    return {
        type: DECREMENT
    };
}

function updateNameAC( name ) {
    return {
        type: UPDATE_NAME,
        payload: {
            value: name
        }
    };
}

export {
    incrementAC,
    decrementAC,
    updateNameAC
};