import React from 'react';
import ContactList from '../components/ContactList';
import {FormApp} from './FormApp';

export class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			list: [],
			firstName: "",
			lastName: "",
			address: "",
			contactId: 0
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.getIndex = this.getIndex.bind(this);
	}

	getIndex(id, contactList) {
		let index;

		index = contactList.findIndex((item, i) => {
		  return item.id == contactId;
		});

		return index;
	}

	handleEdit(e) {
		let contactId = e.target.getAttribute('data-typeId'),
			  newContactList = this.state.list,
			  index;

		index = newContactList.findIndex((item, i) => {
		  return item.id == contactId;
		});
		this.setState({contactId: newContactList[index].id, firstName: newContactList[index].first_name, lastName: newContactList[index].last_name, address: newContactList[index].address});
	}

	handleRemove(e) {
		let contactId = e.target.getAttribute('data-typeId'),
			  newContactList = this.state.list,
			  index;

		index = newContactList.findIndex((item, i) => {
		  return item.id == contactId;
		});
		newContactList.splice(index, 1);

		this.setState({list: newContactList});
	}

	handleChange(formInput) {
		this.setState(formInput);
	}

	handleSubmit(contact) {

		let contactList = this.state.list;

		if(contact.id > 0) {
			let index = contactList.findIndex((item, i) => {
			  return item.id == contact.id;
			});
			contactList.splice(index, 1, contact);
		}
		else {
			//contact id is 0 for new contact, so create new id using date now 
			contact.id = Date.now()
			//append new contact object to end of object array
			contactList = contactList.concat(contact)
		}

		this.setState(prevState => ({
			list: contactList,
			firstName: "", 
			lastName: "", 
			address: "",
			contactId: 0
		}));
		
	}

	componentDidMount() {
		//MIMIC AN AJAX CALL UPDATING LIST
		const peopleList = [{id:1525207676771, first_name:"Ed",last_name:"Wince",address:"755 South Lafayette Dr."},
			      {id:1525207680217, first_name:"Paul",last_name:"Webber",address:"599 Excalibur Dr."}];

		this.setState({list: peopleList});

	}

	render() {
		return (

			<div>
				<div className="grid-x">
					<div className="columns small-12 contacts-container">
						<ContactList contacts={this.state.list} handleRemove={this.handleRemove} handleEdit={this.handleEdit}/>
					</div>
				</div>
				<div className="grid-x">
					<div className="columns small-12 form-container">
						<FormApp firstName={this.state.firstName} lastName={this.state.lastName} address={this.state.address} contactId={this.state.contactId} onSubmit={this.handleSubmit} onChange={this.handleChange} />
					</div>
				</div>
			</div>
		);
	}
}