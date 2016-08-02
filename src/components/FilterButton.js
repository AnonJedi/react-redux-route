import React from 'react';
import { Link } from 'react-router';


export default ({filter, children}) => (
	<Link 
		to={filter === 'all' ? '' : filter}
		className='header-item'
		activeClassName='acitve-tab'
	>{children}</Link>
);



// export default class FilterButton extends Component {
// 	onFilterClick(e) {
// 		this.props.newFilter(e.target.innerText);
// 	}

// 	render() {
// 		return (
// 			<Link className={this.props.filter.isActive ? 'header-item acitve-tab' : 'header-item'} 
// 				onClick={::this.onFilterClick}>
// 				{this.props.filter.name}
// 			</Link>
// 		)
// 	}
// }