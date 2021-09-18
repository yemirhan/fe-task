import { createStore, combineReducers } from 'redux'
import $coffee from './coffee.reducer'
export default createStore(combineReducers({ $coffee }))