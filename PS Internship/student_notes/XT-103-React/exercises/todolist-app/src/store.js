import {createStore , combineReducers} from 'redux'
import todoListReducer from './reducers/todoListReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(combineReducers({
    todoList : todoListReducer
}), composeWithDevTools())
export default store