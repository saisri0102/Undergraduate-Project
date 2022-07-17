import React from 'react';
import {Route} from 'react-router-dom'

import { getFilteredDetails } from '../services/home'
import Search from './Search'
import ShowResults from './ShowResults'
import UserDetails from './users/UserDetails'

function Home(props) {

    const LOADING_DETAILS = "LOADING_DETAILS"
    const LOADED_DETAILS = "LOADED_DETAILS"
    const ERROR_LOADING_DETAILS = "ERROR_LOADING_DETAILS"
    const [detailsState , setDetails ] = React.useState({
        status: LOADING_DETAILS,
        details:'',
        error: null,
        category: '',
    });
    
    function getDetailsBySearch( input , category){
        getFilteredDetails(input , category)
        .then( details => {
            console.log(details.response)
            setDetails({
                ...detailsState,
                status: LOADED_DETAILS,
                details: details,
                category:category
            });
            console.log( detailsState.details  );
            console.log( detailsState.response );
        })
        .catch( error => {
            console.log(error.message)
            setDetails( {
                status: ERROR_LOADING_DETAILS,
                error
            } );
            console.log( error.message );
        });
    }

    return (
        <React.Fragment>
            <div className="mt-5">
                <h1 className="text-center fw-normal"><i>GITHUB Search</i></h1>
                <hr />
            </div>
            <div>
                <Route path="/" component = {() => <Search getDetailsBySearch = {getDetailsBySearch}/>} exact />
                <Route path= "/results" component = {() =><ShowResults detailsState = {detailsState} />} exact />
                <Route path = "/users/:id" component = {(props) => <UserDetails  props = {props}/>} exact />
            </div>
        </React.Fragment>
    );
}

export default Home;