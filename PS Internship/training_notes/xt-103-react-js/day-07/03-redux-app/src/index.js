import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/Counter';
import UserForm from './components/Form';

ReactDOM.render(
    <React.StrictMode>
        <Counter />
        <UserForm />
    </React.StrictMode>,
    document.getElementById('root')
);