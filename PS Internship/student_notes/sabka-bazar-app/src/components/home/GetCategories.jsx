import React from 'react';
import CardComponent from './CardComponent';
function GetCategories( {categoriesState}){

    const LOADING_CATEGORIES = "LOADING_CATEGORIES"
    const LOADED_CATEGORIES = "LOADED_CATEGORIES"
    const ERROR_LOADING_CATEGORIES = "ERROR_LOADING_CATEGORIES"
    console.log(categoriesState.status)
    let el
    switch(categoriesState.status){
        case LOADING_CATEGORIES:
            el = (
                <div class="alert alert-primary alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                    </button>
                    <strong>We are fetching your Categories .. Hang on!!</strong> 
                </div>
            )
            break;
        case LOADED_CATEGORIES:
            el =  (
                 <CardComponent categories = {categoriesState.categories} />     
            )
            break;
        case ERROR_LOADING_CATEGORIES:
            el = (
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                    </button>
                    <strong>{categoriesState.error}</strong> 
                </div>
            )
            break;
        default:
            el = null
            break;
    }
    return (
        el
    )
}
export default GetCategories;