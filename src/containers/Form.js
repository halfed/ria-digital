import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';
import * as courseActions from '../actions/contactsAction';

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: "",
			lastName: "",
			address: "",
			contactId: 0,
			isEditing: false,
			contactIndex: 0
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {

	    let contactList = this.props.list,
	        contactId = this.props.editContactId,
	        index;

	    if(this.props.editContactId) {
	    	index = contactList.findIndex((item, i) => {
			  return item.id == contactId;
			});
			this.setState({contactId: contactList[index].id, firstName: contactList[index].first_name, lastName: contactList[index].last_name, address: contactList[index].address, isEditing: true, contactIndex: index});
	    }
	    else {
	    	this.setState({contactId: 0, 
	    				   firstName: "", 
	    				   lastName: "", 
	    				   address: "", 
	    				   isEditing: false, 
	    				   contactIndex: 0
	    				});
	    }
	 }

	handleChange(e) {
		const formInput = {};
		formInput[e.target.name] = e.target.value;
		this.setState(formInput);
	}

	handleSubmit(e) {
    	e.preventDefault();

    	if(this.state.firstName === "" || this.state.lastName === "" || this.state.address === "") {
    		return;
    	}

    	//create a contact object of new or updated person and send it to parent component
    	const contact = {
    		id: this.state.contactId,
    		first_name: this.state.firstName,
    		last_name: this.state.lastName,
    		address: this.state.address
    	}

		if(this.state.isEditing) {
			let index = this.state.contactIndex;
			this.props.actions.updateContact(index, contact);
		}
		else {
			//contact id is 0 for new contact, so create new id using date now, fudging this to add an id here
			//don't want to mutate state manually, that is a no no
			contact.id = Date.now()
			//append new contact object to end of object array
			//contactList = contactList.concat(contact)
			this.props.actions.createContact(contact);
		}
    	
	}

	render() {
		const editing = this.state.isEditing;
		return (
			
			<form onSubmit={this.handleSubmit}>
				{editing ? <h2>Edit Contact</h2> : ""}
				<div className="grid-x">
					<div className="columns small-8">
						<label htmlFor="firstName">First Name: </label>
						<input type="text" name="firstName" id="firstName" onChange={this.handleChange} value={this.state.firstName} />
					</div>
				</div>
				<div className="grid-x">
					<div className="columns small-8">
						<label htmlFor="lastName">Last Name: </label>
						<input type="text" name="lastName" id="lastName" onChange={this.handleChange} value={this.state.lastName} />
					</div>
				</div>
				<div className="grid-x">
					<div className="columns small-8">
						<label htmlFor="address">Address: </label>
						<input type="text" name="address" id="address"  onChange={this.handleChange} value={this.state.address} />
					</div>
				</div>
				<input type="hidden" name="contactId"  value={this.state.contactId}/>
				<button type="submit" className="button success">Submit</button>
			</form>
		);
	}
}

//look here
function mapStateToProps(state, ownProps) {
  return {
    list: state.list,
    editContactId: ownProps.params.id
  };
}

function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);