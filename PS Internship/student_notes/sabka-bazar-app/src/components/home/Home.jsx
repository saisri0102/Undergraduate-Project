import React from 'react';
import {getBanners, getCategories} from '../../services/home'
import GetBanners from './GetBanners'
import GetCategories from './GetCategories'


function Home(props) {

    const LOADING_BANNERS = "LOADING_BANNERS"
    const LOADED_BANNERS = "LOADED_BANNERS"
    const ERROR_LOADING_BANNERS = "ERROR_LOADING_BANNERS"

    const LOADING_CATEGORIES = "LOADING_CATEGORIES"
    const LOADED_CATEGORIES = "LOADED_CATEGORIES"
    const ERROR_LOADING_CATEGORIES = "ERROR_LOADING_CATEGORIES"

    const [ bannersState , setBanners] = React.useState({
        status: LOADING_BANNERS,
        banners:null,
        error:null,
    });

    const [categoriesState , setCategories] =  React.useState({
        status: LOADING_CATEGORIES,
        categories:null,
        error:null,
    });
   
    React.useEffect(() => {
        getBanners()
            .then( banners => {
                setBanners( {
                    status: LOADED_BANNERS,
                    banners
                } );
                console.log( bannersState.banners  );
                console.log( bannersState.status );
            })
            .catch( error => {
                console.log(error.message)
                setBanners( {
                    status: ERROR_LOADING_BANNERS,
                    error
                } );
                console.log( error.message );
            });
        getCategories()
            .then( categories => {
                setCategories( {
                    status: LOADED_CATEGORIES,
                    categories
                });
            })
            .catch( error => {
                setCategories( {
                    status: ERROR_LOADING_CATEGORIES,
                    error
                });
            });
        
    }, []);

    return (
        <React.Fragment>
            <GetBanners bannersState = {bannersState} />
            <GetCategories categoriesState = {categoriesState} />
        </React.Fragment>
    )
}

export default Home;