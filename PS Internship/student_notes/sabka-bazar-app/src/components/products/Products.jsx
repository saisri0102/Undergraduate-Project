import React from 'react';
import {NavLink, Route} from 'react-router-dom'
import {getProducts} from '../../services/products'
import ProductsList from './ProductsList'
function Category(props){
    return (
        
        <aside className="navbar-expand-md bg-light-gray  col-12 my-2 col-md-2 ">
            
            <ul className="d-felx flex-column nav-item collapse navbar-collapse ">
                <li className ="pb-3 b-bottom">
                <NavLink to='/'>Fruits and Vegetables</NavLink>
                </li>
                <li className ="pb-3 b-bottom">
                <NavLink to="/">Bakery Items and Dairy</NavLink>
                </li>
                <li className ="pb-3 b-bottom">
                <NavLink to="/">Beverages</NavLink>
                </li>
                <li className ="pb-3 b-bottom">
                <NavLink to="/">Beauty and Hygine</NavLink>
                </li>
                <li className ="pb-3 b-bottom">
                <NavLink to="/">Baby Care</NavLink>
                </li>
            </ul>
        
      
            <select className="col-12  btn-primary-pink">
                <option>Fruits and Vegetables</option>
                <option>Bakery Items and Dairy</option>
                <option>Beverages</option>
                <option>Beauty and Hygine</option>
                <option>Baby Care</option>
            </select>
        </aside>
        
    )
}
function Products(props) {
    const LOADING_PRODUCTS = "LOADING_PRODUCTS"
    const LOADED_PRODUCTS = "LOADED_PRODUCTS"
    const ERROR_LOADING_PRODUCTS = "ERROR_LOADING_PRODUCTS"

    const [ productsState , setProducts] = React.useState({
        status: LOADING_PRODUCTS,
        products:null,
        error:null,
    });

    React.useEffect(() => {
        getProducts()
            .then( products => {
                setProducts( {
                    status: LOADED_PRODUCTS,
                    products
                } );
                console.log( productsState.products  );
                console.log( productsState.status );
            })
            .catch( error => {
                setProducts( {
                    status: ERROR_LOADING_PRODUCTS,
                    error
                } );
                console.log( error.message );
            });
        
    }, []);

    return (
        <div className="row container">
            <Category props = {props} />
            <ProductsList productsState = {productsState} />
            {/* <Route path ={this.props.match.url } component={()=> <ProductsList productsState = {productsState} />} /> */}
            {/* <Route path ={this.props.match.url + `${productsState.products.category}` } component={()=> <ProductsList productsState = {productsState} category = {}/>} /> */}
        </div>
    );
}

export default Products;