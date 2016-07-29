export const downloadEmployers = () => (
	(dispatch) => {
		dispatch({
			type: 'DOWNLOAD_EMPLOYERS_LIST',
			payload: employers
		});
	}
);

export const addNewEmployer = (employer) => (
	(dispatch) => {
		dispatch({
			type: 'ADD_EMPLOYER',
			payload: employer
		});
	}
);

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