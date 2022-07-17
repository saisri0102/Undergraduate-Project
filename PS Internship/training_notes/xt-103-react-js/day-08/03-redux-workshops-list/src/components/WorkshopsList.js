import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    loadWorkshopsThunk,
    WORKSHOPS_LIST_LOADING,
    WORKSHOPS_LIST_LOADED,
    WORKSHOPS_LIST_ERROR_LOADING
} from '../actions';

import { getWorkshops } from '../reducers/workshops';

function WorkshopsList() {
    const dispatch = useDispatch();
    const { status, workshops, error } = useSelector( getWorkshops );

    React.useEffect(() => {
        // we are dispatching a function
        // Thunk middleware keeps quiet when we dispatch a normal action (object)
        // Thunk middleware will execute the function if you dispatch a function
        dispatch( loadWorkshopsThunk() );
    }, [ ]);

    let el;

    switch( status ) {
        case WORKSHOPS_LIST_LOADING:
            el = (
                <div>We are fetching workshops. Please wait</div>
            );
            break;
        case WORKSHOPS_LIST_LOADED:
            el = (
                <ul>
                {
                    workshops.map( workshop => (
                        <li key={workshop.id}>{workshop.name}</li>
                    ))
                }
                </ul>
            );
            break;
        case WORKSHOPS_LIST_ERROR_LOADING:
            el = (
                <div>{error.message}</div>
            );
            break;
        default: 
            el = null;
    }

    return el;
}

export default WorkshopsList;