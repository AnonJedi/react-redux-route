const employers = [
	{
		'id': 1,
		'firstname': 'first',  
		'surename': 'second',
		'role': 'front'
	}
]

export const downloadEmployers = () => (
	(dispatch) => {
		dispatch({
			type: 'DOWNLOAD_EMPLOYERS_LIST',
			employers: employers
		});
	}
);

export const addNewEmployer = (employer) => (
	(dispatch) => {
		dispatch({
			type: 'ADD_NEW_EMPLOYER',
			employer: employer
		});
	}
)
