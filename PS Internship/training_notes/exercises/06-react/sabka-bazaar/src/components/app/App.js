import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Home from '../home/Home';

function App(props) {
    return (
        <div>
            <Navbar />
            <Route path="/" component={Home} />
        </div>
    );
}

export default App;