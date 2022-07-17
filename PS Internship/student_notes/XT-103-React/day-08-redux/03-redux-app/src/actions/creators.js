import {INCREMENT , DECREMENT , UPDATE_USERNAME} from './constants'
function increment(value) {
    return {
        type: INCREMENT,
        payload:{
            value
        }
    };
}

function decrement(value) {
    return {
        type: DECREMENT,
        payload:{
            value
        }
    };
}

function updateUsername( username){
    return{
        type: UPDATE_USERNAME,
        payload:{
            username
        }
    }
}

export {
    increment,
    decrement,
    updateUsername
}