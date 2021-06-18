import {combineReducers} from 'redux';

import ListReunionReducer from './ListReunionReducer'

const rootReducer=combineReducers({
    ListReunion:ListReunionReducer
})

export default  rootReducer;
