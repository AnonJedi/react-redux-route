import React, { Component } from 'react';

export default class Filter extends Component {
	render() {
		return (
			<div className='header' >
				<div className='header-item' >All</div>
				<div className='header-item' >Fronts</div>
				<div className='header-item' >Backs</div>
			</div>
		)
	}
}