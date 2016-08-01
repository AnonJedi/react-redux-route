import { combineReducers } from 'redux';

import employer from './employer';
import filter from './filter';

export default combineReducers({
	filter,
	employer
}); 