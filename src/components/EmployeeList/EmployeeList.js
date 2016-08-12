import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { v4 } from 'node-uuid';

import { downloadEmployers } from '../../actions/EmployersAction';
import { classes } from './styles';


class EmployersList extends Component {
	componentDidMount() {
		this.props.downloadEmployers();
	}

	render() {
		const currentTab = this.props.filter;
		return (
			<table className={classes.employerList} >
				<thead className={classes.employerHeader}>
					<tr>
						<th className={classes.employerHeader}>firstname</th>
						<th className={classes.employerHeader}>surename</th>
						<th className={classes.employerHeader}>role</th>
					</tr>
				</thead>
				<tbody>
					{this.props.employers.map((employer) => {
						if (currentTab === 'all' || employer.role === currentTab) {
							return (
								<tr key={v4()}>
									<td key={v4()} className={classes.employerItem}>{employer.firstname}</td>
									<td key={v4()} className={classes.employerItem}>{employer.surename}</td>
									<td key={v4()} className={classes.employerItem}>{employer.role}</td>
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