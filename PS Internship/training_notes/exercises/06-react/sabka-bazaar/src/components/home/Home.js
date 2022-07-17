import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Carousel from '../Carousel/Carousel';

import { getBanners, getCategories } from '../../services';

function Home(props) {
    const [ error, setError ] = useState( null );
    
    // fetch banners
    const [ banners, setBanners ] = useState( [] );
    useEffect(() => {
        (async function() {
            try {
                const banners = await getBanners();
                setBanners( banners );
            } catch( error ) {
                setError( error );
            }
        }());
    }, []);
    
    // fetch categories
    const [ categories, setCategories ] = useState( [] );
    useEffect(() => {
        (async function() {
            try {
                const categories = await getCategories();
                setCategories( categories );
            } catch( error ) {
                setError( error );
            }
        }());
    }, []);
    
    return (
        error ? (
            <div>There was an error - {error.message}</div>
        ) : (
            <React.Fragment>
                <div>
                    <Carousel items={banners} />
                </div>
                <div className="container-fluid">
                    {
                        categories.map(( category, idx ) => (
                            <div key={category.key} className="row my-3">
                                <div className="col-4">
                                    {category.description}
                                </div>
                                <div className="col-8">
                                    <img src={category.imageUrl} alt={category.name} style={{ maxHeight: '240px' }}/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </React.Fragment>
        )
    );
}

export default Home;