import React from 'react';
import RepoCardComponent from '../repos/RepoCardComponent';
import {getFilteredVideosByType} from '../../services/home'

function UserDetails({props}) {

    console.log(props.match.url);
    const LOADING_REPOS = "LOADING_REPOS"
    const LOADED_REPOS = "LOADED_REPOS"
    const ERROR_LOADING_REPOS = "ERROR_LOADING_REPOS"

    const [reposState, setRepos] = React.useState({
        status: LOADING_REPOS,
        repos:[],
        error: null
    });

    React.useEffect(()=>{
        getFilteredVideosByType("john")
        .then( repos => {
            console.log(repos)
            setRepos( { 
                ...reposState,
                status: LOADED_REPOS,
                repos: [...repos]
            });
            console.log( reposState.status  );
            console.log( reposState.repos  );
        })
        .catch( error => {
            console.log(error.message)
            setRepos( {
                status: ERROR_LOADING_REPOS,
                error
            } );
            console.log( error.message );
        });
    }, [])


    return (
        <div>
            {
                <RepoCardComponent details= {reposState.repos} />
            }
        </div>
    );
}

export default UserDetails;