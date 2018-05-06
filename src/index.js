import React from 'react';
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

ReacDOM.render(<ContactsApp />, document.getElementById('app'));

