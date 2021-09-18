import { createStore, combineReducers } from 'redux'
import $coffee from './coffee.reducer'
const reducers = combineReducers({ $coffee })
export default createStore(reducers)

export type AppState = ReturnType<typeof reducers>;