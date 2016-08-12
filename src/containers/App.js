import React, { Component } from 'react';

import Form from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import EmployersList from '../components/EmployeeList/EmployeeList';

export default class App extends Component {
    render() {
        const filter = ['all', 'front', 'back'].indexOf(this.props.params.filter) !== -1  ? this.props.params.filter : 'all';
        debugger
        return (
            <div className='app'>
                <Filter />
                <Form />
                <EmployersList filter={filter} />
            </div>
        );
    }
}
