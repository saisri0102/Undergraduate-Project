import React from 'react'
import UserCardComponent from './users/UserCardComponent'
import RepoCardComponent from './repos/RepoCardComponent'
function ShowResults( {detailsState} ){

    console.log(detailsState.status)

    let el
    console.log(detailsState.response)

    if(detailsState.category === 'user'){
        el =  (
            <UserCardComponent details = {detailsState.details}/>     
       )
    }
    else{
        el =  (
            <RepoCardComponent details = {detailsState.details}  />     
       )
    }
    return (
        el
    )
}

export default ShowResults