import { createStore } from 'redux';
import counterReducer from './reducers/counter';

export default createStore( 
    // use combineReducers() to generate a master reducer tha that delegates to counter and form reducers
    counterReducer
);