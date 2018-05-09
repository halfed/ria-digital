import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './containers/App';

class ContactsApp extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<App />);
	}
}

ReactDOM.render(<ContactsApp />, document.getElementById('app'));

