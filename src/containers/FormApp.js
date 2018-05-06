import React from 'react';
import PropTypes from 'prop-types'

export class FormApp extends React.Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const formInput = {};
		formInput[e.target.name] = e.target.value;
		this.props.onChange(formInput);
	}

	handleSubmit(e) {
    	e.preventDefault();

    	//create a contact object of new or updated person and send it to parent component
    	const contact = {
    		id: this.props.contactId,
    		first_name: this.props.firstName,
    		last_name: this.props.lastName,
    		address: this.props.address
    	}
    	this.props.onSubmit(contact);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="grid-x">
					<div className="columns small-8">
						<label htmlFor="firstName">First Name: </label>
						<input type="text" name="firstName" id="firstName" onChange={this.handleChange} value={this.props.firstName} />
					</div>
				</div>
				<div className="grid-x">
					<div className="columns small-8">
						<label htmlFor="lastName">Last Name: </label>
						<input type="text" name="lastName" id="lastName" onChange={this.handleChange} value={this.props.lastName} />
					</div>
				</div>
				<div className="grid-x">
					<div className="columns small-8">
						<label htmlFor="address">Address: </label>
						<input type="text" name="address" id="address"  onChange={this.handleChange} value={this.props.address} />
					</div>
				</div>
				<input type="hidden" name="contactId" value={this.props.contactId} />
				<button type="submit" className="button success">Submit</button>
			</form>
		);
	}
}

FormApp.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
	contactId: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
}
