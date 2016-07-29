import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Form from '../components/Form';
import Filter from '../components/Filter';
import EmployersList from '../components/EmployersList';
import * as employersAction from '../actions/EmployersAction';

export default class App extends Component {
	render() {
		const employersProps = this.employers;
		const { downloadEmployers } = this.props.employersAction;
		return (
			<div className='app'>
				<Filter />
				<Form />
				<EmployersList downloadEmployers={downloadEmployers} employers={employersProps} />
			</div>
		);
	}
}

const mapStateToProps = (state) => (
	{employers: state.employers}
);

const mapDispatchToProps = (dispatch) => (
	{employers: bindActionCreators(employersAction, dispatch)}
)

export default connect(mapStateToProps, mapDispatchToProps)(App);