import * as types from '../actions/actionTypes';  
import initialState from './initialState';
import {hashHistory} from 'react-router';

export default function contactsReducer(state = initialState.list, action) {
  console.log("action in contactsReducer r2: " + action.type);
  console.log("state in contactsReducer r2: " + state);
  switch(action.type) {
    case types.LOAD_CONTACTS_SUCCESS:
      return action.list
    case types.CREATE_CONTACT_SUCCESS:
      hashHistory.push("/");
      //append new contact object to end of object array
      state = state.concat(action.contact)
      return state;
    case types.DELETE_CONTACT_SUCCESS: {
      const newState = Object.assign([], state);
      newState.splice(action.index, 1);
      return newState;
    }
    default: 
      return state;
  }
}