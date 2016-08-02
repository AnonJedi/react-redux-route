import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { v4 } from 'node-uuid';

import { addNewEmployer } from '../actions/EmployersAction';

class Form extends Component {

	onSubmitClick(e) {
		e.preventDefault();
		const form = e.target.parentElement;
		const firstname = form.getElementsByClassName('js-firstname')[0];
		const surename = form.getElementsByClassName('js-surename')[0];

		const employer = {
			id: v4(),
			firstname: firstname.value,
			surename: surename.value,
			role: form.getElementsByClassName('js-role')[0].value
		};
		this.props.addNewEmployer(employer);
		firstname.value = '';
		surename.value = '';
	}

	render() {
		return (
			<form className='add-form' >
				<label className='form-name'>add employer</label>
				<input type='text' name='firstname' 
					placeholder='firstname' 
					className='form-field js-firstname' 
					required='required' 
					pattern='[A-Za-zА-Яа-я]+' />
				<input type='text' name='surename' 
					placeholder='surename' 
					className='form-field js-surename' 
					required='required' 
					pattern='[A-Za-zА-Яа-я]+' />
				<select className='form-field js-role' >
					<option>front</option>
					<option>back</option>
				</select>
				<input type='submit' value='add' 
					className='form-button'
					onClick={::this.onSubmitClick} />
			</form>
		);
	}
}  

const mapDispatchToProps = (dispatch) => ({
	addNewEmployer: bindActionCreators(addNewEmployer, dispatch)
})

export default connect(null, mapDispatchToProps)(Form);