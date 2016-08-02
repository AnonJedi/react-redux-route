const initialState = {
	employers: []
}

export default (state = initialState, action) => {
	switch(action.type) {
		case 'DOWNLOAD_EMPLOYERS_LIST':
			return {...state, employers: action.employers};
		case 'ADD_NEW_EMPLOYER':
			return {...state, employers: state.employers.concat(action.employer)};
		default:
			return state;
	}
}