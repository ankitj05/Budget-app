import investment from './investment'
import expense from './expense'
import { combineReducers } from 'redux';

const reducers = combineReducers({
    expense,
    investment
})

export default reducers;