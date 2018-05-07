import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ContactList = (props) => {
	return (
		<ul>
			{props.contacts.map(result => (
				<li key={result.id}>
					<h3>{result.first_name} {result.last_name}</h3>
					<p>{result.address}</p>
					<div className="two-button-container">
						<button type="button" className="button small left" onClick={props.handleEdit} data-typeid={result.id}>Edit</button>
						<Link type="button" className="button small left" onClick={props.handleEdit} data-typeid={result.id} to="contact-form">Home</Link>
						<button type="button" className="button small right alert" onClick={props.handleRemove} data-typeid={result.id}>Remove</button>
					</div>
				</li>
			))}
		</ul>);
}

ContactList.propTypes = {
	contacts: PropTypes.array.isRequired
}

export default ContactList;