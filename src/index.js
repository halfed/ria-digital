/*import React from 'react';
import ReacDOM from 'react-dom';
import {App} from './containers/App';

class ContactsApp extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<App />);
	}
}

ReacDOM.render(<ContactsApp />, document.getElementById('app'));*/

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

ReactDOM.render(
 <Provider store={store}>
	 <Router history={hashHistory}>
		 <Route path="/" component={App}>
		 	<IndexRoute component={ContactList} />
		 	<Route path="form" component={FormApp}>
		 		<IndexRoute  component={Form} />
		 	</Route>
	    </Route>

	 </Router>
 </Provider>,
 document.getElementById('app')
);

