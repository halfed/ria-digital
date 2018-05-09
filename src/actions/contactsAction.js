import * as types from './actionTypes';  
import contactsApi from '../api/contactsApi';

export function loadContactsSuccess(list) { 
  return {type: 'LOAD_CONTACTS_SUCCESS', list};
}

export function createContactSuccess(contact) {  
  return {type: types.CREATE_CONTACT_SUCCESS, contact}
}

export function deleteContactSuccess(index) {  
  return {type: types.DELETE_CONTACT_SUCCESS, index}
}

export function loadContacts() {  
  return function(dispatch) {
  	const list = contactsApi.getAllContacts();
  	contactsApi.getAllContacts();
    return dispatch(loadContactsSuccess(list));
  };
}

export function createContact(contact) {  
  return function (dispatch) {
  	return dispatch(createContactSuccess(contact));
  };
}

export function deleteContact(index) {
  return function(dispatch) {
    return dispatch(deleteContactSuccess(index));
    };
  }
