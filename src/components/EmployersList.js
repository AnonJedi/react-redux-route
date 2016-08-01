import React, { Component } from 'react';
import * as employersAction from '../actions/EmployersAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class EmployersList extends Component {
	componentDidMount() {
		this.props.employersAction.downloadEmployers();
	}

	render() {
		return (
			<table className='employer-list' >
				<thead className='employers-head'>
					<tr>
						<th className='employer-item'>firstname</th>
						<th className='employer-item'>surename</th>
						<th className='employer-item'>role</th>
					</tr>
				</thead>
				<tbody>
					{this.props.employers.map((employer) => (
						<tr>
							<td className='employer-item'>{employer.firstname}</td>
							<td className='employer-item'>{employer.surename}</td>
							<td className='employer-item'>{employer.role}</td>
						</tr>)
					)}
				</tbody>
			</table>
		)
	}
}

function mapStateToProps(state) {
    return {
        employers: state.employer.employers
    }
}

function mapDispatchToProps(dispatch) {
    return {
        employersAction: bindActionCreators(employersAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployersList);