import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { v4 } from 'node-uuid';

import FilterButton from './FilterButton';
import * as filterActions from '../actions/FilterActions';

class Filter extends Component {
	render() {
		const that = this;
		return (
			<div className='header' >
				{this.props.filter.map(tab => (
					<FilterButton key={v4()} 
						filter={tab} 
						newFilter={that.props.filterActions.setFilter} />
				))}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({filter: state.filter.filter});

const mapDispatchToProps = (dispatch) => ({
	filterActions: bindActionCreators(filterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);