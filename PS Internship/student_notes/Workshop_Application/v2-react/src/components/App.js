import React from 'react';
//import {route} from 'react-rounte-dom';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import WorkshopsList from './workshops/WorkshopsList'
import {Switch , Route} from 'react-router-dom'
import Rough from './rough'
import WorkshopDetails from '../components/workshops/WorkshopDetails'

function App(props) {
    return (
        <div>
            <Navbar />
            {/* <Rough /> */}
            <div className="container my-4">
                <Switch>
                    <Route path="/workshops/:id" component={WorkshopDetails} />
                    <Route path="/workshops" component={WorkshopsList} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
            
        </div>
    );
}

export default App;

