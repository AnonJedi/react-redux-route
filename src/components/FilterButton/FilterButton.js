import React from 'react';
import { Link } from 'react-router';

import { classes } from './styles'; 

export default ({filter, children}) => (
	<Link 
		to={filter === 'all' ? '' : filter}
		className={classes.headerItem}
		activeClassName={classes.acitveTab}
	>{children}</Link>
);