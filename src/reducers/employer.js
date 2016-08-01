const initialState = {
	employers: []
}

export default (state = initialState, action) => {
	switch(action.type) {
		case 'DOWNLOAD_EMPLOYERS_LIST':
			return {...state, employers: action.employers};

		case 'ADD_EMPLOYER':
			return {...state, new_employer: action.new_employer};

		default:
			return state;
	}
}