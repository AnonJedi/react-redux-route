import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { v4 } from 'node-uuid';

import { downloadEmployers } from '../actions/EmployersAction';

class EmployersList extends Component {
	componentDidMount() {
		this.props.downloadEmployers();
	}

	render() {
		const currentTab = this.props.filter;
		return (
			<table className='employer-list' >
				<thead className='employers-head'>
					<tr>
						<th className='employer-header'>firstname</th>
						<th className='employer-header'>surename</th>
						<th className='employer-header'>role</th>
					</tr>
				</thead>
				<tbody>
					{this.props.employers.map((employer) => {
						if (currentTab === 'all' || employer.role === currentTab) {
							return (
								<tr key={v4()}>
									<td key={v4()} className='employer-item'>{employer.firstname}</td>
									<td key={v4()} className='employer-item'>{employer.surename}</td>
									<td key={v4()} className='employer-item'>{employer.role}</td>
								</tr>)
						}
					})}
				</tbody>
			</table>
		)
	}
}

const mapStateToProps = (state) => ({
	employers: state.employer.employers
});

const mapDispatchToProps = (dispatch) => ({
	downloadEmployers: bindActionCreators(downloadEmployers, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployersList);