import React, { Component } from 'react';

import FilterButton from '../FilterButton/FilterButton';
import { classes } from './styles'; 

export default class Filter extends Component {
	render() {
		return (
			<div className={classes.header} >
				<FilterButton  filter='all'>all</FilterButton>
				<FilterButton  filter='front'>front</FilterButton>
				<FilterButton  filter='back'>back</FilterButton>
			</div>
		)
	}
}
