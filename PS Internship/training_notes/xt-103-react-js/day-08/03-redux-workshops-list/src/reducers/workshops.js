import {
    WORKSHOPS_LIST_LOADING,
    WORKSHOPS_LIST_LOADED,
    WORKSHOPS_LIST_ERROR_LOADING
} from '../actions/constants';

const initialState = {
    status: '',
    workshops: null,
    error: null
};

function workshopsReducer( curState = initialState, action ) {
    let newState;

    switch( action.type ) {
        case WORKSHOPS_LIST_LOADING:
            newState = {
                ...curState,
                status: action.type
            };
            break;
        case WORKSHOPS_LIST_LOADED:
            newState = {
                ...curState,
                status: action.type,
                workshops: action.payload.workshops
            };
            break;
        case WORKSHOPS_LIST_ERROR_LOADING:
            newState = {
                ...curState,
                status: action.type,
                error: action.payload.error
            };
            break;
        default:
            newState = curState;
    }

    return newState;
}

export function getWorkshops( state ) {
    return state.workshopsList;
}

export default workshopsReducer;