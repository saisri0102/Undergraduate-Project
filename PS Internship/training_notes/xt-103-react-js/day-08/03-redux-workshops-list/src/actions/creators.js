import {
    WORKSHOPS_LIST_LOADING,
    WORKSHOPS_LIST_ERROR_LOADING,
    WORKSHOPS_LIST_LOADED
} from './constants';

import axios from 'axios';

function workshopsLoading() {
    return {
        type: WORKSHOPS_LIST_LOADING
    };
}

function workshopsLoaded( workshops ) {
    return {
        type: WORKSHOPS_LIST_LOADED,
        payload: {
            workshops
        }
    };
}

function workshopsErrorLoading( error ) {
    return {
        type: WORKSHOPS_LIST_ERROR_LOADING,
        payload: {
            error
        }
    };
}

function loadWorkshopsThunk() {
    return function( dispatch, getState ) {
        // action
        dispatch( workshopsLoading() );

        // to get store state of required call getState()

        // side-effect
        axios.get( `https://workshops-server.herokuapp.com/workshops` )
            .then(response => {
                dispatch( workshopsLoaded( response.data ) );
            })
            .catch(error => {
                dispatch( workshopsErrorLoading( error ) );
            });
    };
}

export {
    workshopsLoading,
    workshopsLoaded,
    workshopsErrorLoading,
    loadWorkshopsThunk
};