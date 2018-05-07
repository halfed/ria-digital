import React from 'react';
import ReacDOM from 'react-dom';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import {ContactList} from './containers/App';

class ContactsApp extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div>
					<div className="row">
						<ul>
							<li><Link to="/contacts">Contacts</Link></li>
						</ul>
					</div>
					{this.props.children}
				</div>
				);
	}
}

ReacDOM.render((
  <Router>
    <ContactsApp>
 		<Route path="/contacts" component={ContactList}/>
    </ContactsApp>
  </Router>
), document.getElementById('app'));

