const employers = [
	{
		'id': 1,
		'firstname': 'first',  
		'surename': 'second',
		'role': 'front'
	},
	{
		'id': 1,
		'firstname': 'first',  
		'surename': 'second',
		'role': 'front'
	},
	{
		'id': 1,
		'firstname': 'first',  
		'surename': 'second',
		'role': 'front'
	},
	{
		'id': 1,
		'firstname': 'first',  
		'surename': 'second',
		'role': 'front'
	},
	{
		'id': 1,
		'firstname': 'first',  
		'surename': 'second',
		'role': 'front'
	},
	{
		'id': 1,
		'firstname': 'first',  
		'surename': 'second',
		'role': 'front'
	},
	{
		'id': 1,
		'firstname': 'first',  
		'surename': 'second',
		'role': 'front'
	},
	{
		'id': 1,
		'firstname': 'first',  
		'surename': 'second',
		'role': 'front'
	},
	{
		'id': 1,
		'firstname': 'first',  
		'surename': 'second',
		'role': 'front'
	},
	{
		'id': 1,
		'firstname': 'first',  
		'surename': 'second',
		'role': 'front'
	},
	{
		'id': 1,
		'firstname': 'first',  
		'surename': 'second',
		'role': 'front'
	},
	{
		'id': 1,
		'firstname': 'first',  
		'surename': 'second',
		'role': 'front'
	}
]

export function downloadEmployers() {
	return (dispatch) => {
		dispatch({
			type: 'DOWNLOAD_EMPLOYERS_LIST',
			employers: employers
		})
	}
}

// export const addNewEmployer = (employer) => (
// 	(dispatch) => {
// 		dispatch({
// 			type: 'ADD_EMPLOYER',
// 			payload: employer
// 		});
// 	}
// )
