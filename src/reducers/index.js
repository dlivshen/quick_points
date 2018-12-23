import { combineReducers } from 'redux';
import fieldsReducer  from './fields';
import saveItemsReducer from './savedItems'

export default combineReducers({
    fields: fieldsReducer,
    savedItems: saveItemsReducer,
});