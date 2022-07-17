import { INCREMENT, DECREMENT } from './constants';

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

// add action creator for UPDATE_NAME and export it - it takes name as a parameter and sets up on the action's payload

export {
    incrementAC,
    decrementAC
};