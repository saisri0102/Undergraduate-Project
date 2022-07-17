import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counter';
import formReducer from './reducers/form';
import { composeWithDevTools } from 'redux-devtools-extension';

// combineReducers() takes in smaller reducers and returns a bigger reducer
const rootReducer = combineReducers({
    counter: counterReducer,
    form: formReducer
})

// When '@@INIT' action is passed, the rootReducer will pass on the action to the constituent reducers, and state is undefined
// counterReducer -> { value: 0 }
// formReducer -> { username: '' }
/*
{
    counter: { value: 0 },
    form: { username: '' }
}
*/
// On ANY action, the root reducer passes on the the action to the constituent reducers
// Only that portion of the state that is managed by the constituent reducer is passed to it
// Whatever is returned by the constituent reducers will be used to update their respective portions in the state
/*
action -> { type: 'INCREMENT' }
Both reducers are called
{
    counter: { value: 1 },
    form: { username: '' }
}
*/
const store = createStore( 
    rootReducer,
    composeWithDevTools()
);

/*
    // shape of the state tree
    {
        counter: {
            value: 0
        },
        form: {
            username: ''
        }
    }
*/

export default store;