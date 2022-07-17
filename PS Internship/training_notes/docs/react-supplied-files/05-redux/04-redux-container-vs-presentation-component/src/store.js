import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counter';
import formReducer from './reducers/form';

export default createStore( 
    // use combineReducers() to generate a master reducer tha that delegates to counter and form reducers
    combineReducers(
        {
            counter: counterReducer,
            form: formReducer
        }
    )
);