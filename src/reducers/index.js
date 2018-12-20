import { combineReducers } from 'redux';
import fieldsReducer  from './fields';

export default combineReducers({
    fields: fieldsReducer
});