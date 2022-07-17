import {createStore , combineReducers , applyMiddleware} from 'redux'
import workshopsReducer from './reducers/workshops'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const store = createStore(
    combineReducers({
        workshopsList: workshopsReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;