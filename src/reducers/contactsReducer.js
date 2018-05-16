import * as types from '../actions/actionTypes';  
import initialState from './initialState';
import {hashHistory} from 'react-router';

export default function contactsReducer(state = initialState.list, action) {
  //NO MUTATING ORGININAL STATE
  const newState = Object.assign([], state);
  switch(action.type) {
    case types.LOAD_CONTACTS_SUCCESS:
      return action.list
    case types.CREATE_CONTACT_SUCCESS:
      hashHistory.push("/");
      //append new contact object to end of object array
      return newState.concat(action.contact);
    case types.DELETE_CONTACT_SUCCESS: {
      newState.splice(action.index, 1);
      return newState;
    }
    case types.UPDATE_CONTACT_SUCCESS:
      hashHistory.push("/");
      newState.splice(action.index, 1, action.contact);
      return newState;
    default: 
      return state;
  }
}