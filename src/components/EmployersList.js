import React, { Component } from 'react';

export default class EmployersList extends Component {
	componentDidMount() {
		this.props.downloadEmployers();
	}

	render() {
		debugger
		return (
			<table className='employer-list' >
				<thead className='employers-head'>
					<td>firstname</td>
					<td>surename</td>
					<td>role</td>
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
