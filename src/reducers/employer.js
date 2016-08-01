const initialState = {
	employers: []
}

export default (state = initialState, action) => {
	switch(action.type) {
		case 'DOWNLOAD_EMPLOYERS_LIST':
			return {...state, employers: action.employers};
		default:
			return state;
	}
}