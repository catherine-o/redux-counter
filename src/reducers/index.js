import { counter } from './counter'
import { todos } from './todos'
import { combineReducers } from 'redux'



export default combineReducers({
    counter, 
    todos
})