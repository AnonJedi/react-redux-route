import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router';

import App from './containers/App';
import './styles/app.css';
import configureStore from './stores/configureStore';

const store = configureStore();

render(
	<Provider store={store}>
		<Router history={browserHistory} >
			<Route path='/(:filter)' component={App} />
		</Router>
	</Provider>,
	document.getElementById('root')
);