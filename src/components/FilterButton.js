import React, { Component } from 'react';

export default class FilterButton extends Component {
	onFilterClick(e) {
		this.props.newFilter(e.target.innerText())
	}

	render() {
		return (
			<div className={this.props.filter.isActive ? 'header-item acitve-tab' : 'header-item'} >
				{this.props.filter.name}
			</div>
		)
	}
}