import React from 'react'
import CarouselComponent from './CarouselComponent'

function GetBanners( {bannersState}){

    console.log(bannersState)
    const LOADING_BANNERS = "LOADING_BANNERS"
    const LOADED_BANNERS = "LOADED_BANNERS"
    const ERROR_LOADING_BANNERS = "ERROR_LOADING_BANNERS"
    console.log(bannersState.status)
    let el
    switch(bannersState.status){
        case LOADING_BANNERS:
            el = (
                <div class="alert alert-primary alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                    </button>
                    <strong>We are fetching your Offers .. Hang on!!</strong> 
                </div>
            )
            break;
        case LOADED_BANNERS:
            el =  (
                 <CarouselComponent banners = {bannersState.banners} />     
            )
            break;
        case ERROR_LOADING_BANNERS:
            console.log(bannersState.error.message)
            el = (
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                    </button>
                    <strong>{bannersState.error.message}</strong> 
                </div>
            )
            console.log(el);
            break;
        default:
            el = null
            break;
    }
    return (
        el
    )
}

export default GetBanners
