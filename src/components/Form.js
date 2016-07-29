import React, { Component } from 'react';

export default class Form extends Component {
	render() {
		return (
			<form className='add-form' >
				<label className='form-name'>add employer</label>
				<input type='textbox' placeholder='firstname' name='firstname' className='form-field' />
				<input type='textbox' placeholder='surename' name='surename' className='form-field' />
				<select className='form-field' >
					<option>front</option>
					<option>back</option>
				</select>
				<input type='submit' value='add' className='form-button' />
			</form>
		);
	}
}  