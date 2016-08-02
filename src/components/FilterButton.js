import React from 'react';
import { Link } from 'react-router';


export default ({filter, children}) => (
	<Link 
		to={filter === 'all' ? '' : filter}
		className='header-item'
		activeClassName='acitve-tab'
	>{children}</Link>
);