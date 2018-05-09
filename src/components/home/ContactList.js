import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link, IndexLink } from 'react-router';
import * as contactsAction from '../../actions/contactsAction';

class ContactList extends React.Component {
	constructor(props) {
		super(props);

		this.handleRemove = this.handleRemove.bind(this);
	}

	handleRemove(e) {
		//GET THE INDEX OF CONTACT IN ARRAY TO SEND TO ACTIONS FOR PROCESSING, MAYBE CAN JUST SEND ID AND LET REDUCER 
		//DO THIS WORK
		let contactId = e.target.getAttribute('data-typeId'),
			  newContactList = this.props.list,
			  index;

		index = newContactList.findIndex((item, i) => {
		  return item.id == contactId;
		});

		this.props.actions.deleteContact(index);
	}

	render() {
		return (
			<ul>
				{this.props.list.map(result => (
					<li key={result.id}>
						<h3>{result.first_name} {result.last_name}</h3>
						<p>{result.address}</p>
						<div className="two-button-container">
							<Link to={"/form-edit/"+result.id} className="button small left" data-typeid={result.id}>Edit</Link>
							<button type="button" className="button small right alert"  onClick={this.handleRemove} data-typeid={result.id}>Remove</button>
						</div>
					</li>
				))}
			</ul>
		);
	}
}

ContactList.propTypes = {
	list: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
	return {
	    list: state.list
	};
} 

function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(contactsAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList); 