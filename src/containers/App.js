import React, { Component } from 'react';

import Form from '../components/Form';
import Filter from '../components/Filter';
import EmployersList from '../components/EmployersList';

export default class App extends Component {
    render() {
        return (
            <div className='app'>
                <Filter />
                <Form />
                <EmployersList />
            </div>
        );
    }
}
