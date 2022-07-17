import React from 'react';

// Import and render container components instead of components (presentation components)
import Counter from '../components/Counter';
import UserForm from '../components/UserForm';

export default function App( props ) {
    return (
        <React.Fragment>
            <Counter />
            <UserForm />
        </React.Fragment>
    );
}