const initialState= {
	filter: [
		{
			'name': 'all',
			'isActive': true
		},{
			'name': 'front',
			'isActive': false
		}, {
			'name': 'back',
			'isActive': false
		}
	]
}

export default (state = initialState, action) => {
	switch(action.type) {
		case 'SET_FILTER':
			const newFilter = state.filter.map(tab => {
				if (action.filter === tab.name) {
					return {...tab, isActive: true};
				} else {
					return {...tab, isActive: false};
				}
			});
			return {...state, filter: newFilter};
		default:
			return state;
	}
}