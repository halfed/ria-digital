import {combineReducers} from 'redux';  
import list from './contactsReducer';

const rootReducer = combineReducers({
  list
});

export default rootReducer;  