import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import configureStore from './store/configureStore';  
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute, hashHistory } from 'react-router';
import App from './containers/App';  
import ContactList from './components/home/ContactList';
import FormApp from './components/FormApp';
import Form from './containers/Form';
import {loadContacts} from './actions/contactsAction';

const store = configureStore();
store.dispatch(loadContacts());
//USING HASHHISTORY AS IT WAS EASIER TO GET THE ROUTES WORKING FOR NOW, LATER WILL USE BROWSERHISTORY
ReactDOM.render(
 <Provider store={store}>
	 <Router history={hashHistory}>
		 <Route path="/" component={App}>
		 	<IndexRoute component={ContactList} />
		 	<Route path="form" component={FormApp}>
		 		<IndexRoute  component={Form} />
		 	</Route>
		 	<Route path="form-edit/:id" component={FormApp}>
		 		<IndexRoute  component={Form} />
		 	</Route>
	    </Route>

	 </Router>
 </Provider>,
 document.getElementById('app')
);

