import React from 'react';
import Navbar from './navbar/Navbar'
import Rough from '../components/rough'
import Products from './products/Products'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import Footer from './footer/Footer';
import Home from './home/Home'
import SignIn from './user/SignIn'
import Register from './user/Register'
function App(props) {
    return (
        <div>
            
            <Navbar />
            {/* <Rough /> */}
            <Switch>
                <Route path="/signin" component={SignIn} />
                <Route path="/register" component={Register} />
                <Route path ="/products" component={Products} />
                <Route path="/" component={Home} />
                
            </Switch>
            <Footer />
            
        </div>
    );
}

export default App;