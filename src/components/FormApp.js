import React from 'react';
import PropTypes from 'prop-types'

export class FormApp extends React.Component {
	render() {
		return (
			<div className="grid-x form-container">
        		<div className="columns small-12">
					{this.props.children}
				</div>
			</div>
		);
	}
}
