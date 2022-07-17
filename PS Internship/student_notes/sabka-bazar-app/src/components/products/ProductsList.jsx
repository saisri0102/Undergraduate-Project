import React from 'react';

function ProductItem ({product}){
    const {name , description, imageURL , price } = product
    return (
        
            <div className="col-12 col-md-6 col-lg-3  mb-3 border border-light ">
                <div className="font-weight-bold pb-2">
                    {name}
                </div>
                <div class="row">
                    <div className="col-6 col-lg-12">
                        <img src={imageURL} alt={name} width="80%" />
                    </div>
                    <div className="col-6 col-lg-12 text-justify bg-light-gray w-90 mt-2" >
                        {description}
                    </div>
                    <div className="row col-12">
                        {/* <div className="col-6">
                            MRP-50
                        </div> */}
                        <div className="col-12 mt-2">
                            <button className="btn-primary">Buy Now @Rs:{price}</button>
                        </div>
                    </div>
                </div>
            </div>   
    );
}

function ProductsList( {productsState}){

    const LOADING_PRODUCTS = "LOADING_PRODUCTS"
    const LOADED_PRODUCTS = "LOADED_PRODUCTS"
    const ERROR_LOADING_PRODUCTS = "ERROR_LOADING_PRODUCTS"
    console.log(productsState.status)
    let el
    switch(productsState.status){
        case LOADING_PRODUCTS:
            el = (
                <div class="alert alert-primary alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                    </button>
                    <strong>We are fetching your Products .. Hang on!!</strong> 
                </div>
            )
            break;
        case LOADED_PRODUCTS:
            el =  (
                <main className =" col-12 col-md-10 mt-2" >
                    <div class="row  flex-wrap">

                {
                    productsState.products.map(product =>(
                        <ProductItem product = {product} key = {product.id}/>    
                    )) 
                   
                }
                    </div>
                </main>      
            )
            break;
        case ERROR_LOADING_PRODUCTS:
            el = (
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                    </button>
                    <strong>{productsState.error}</strong> 
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

export default ProductsList;