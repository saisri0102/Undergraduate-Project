import React from 'react';
import axios from 'axios';

export class ProductCatalog extends React.Component {
    state = {
        loading: !this.props.products,
        products: this.props.products
    };

    render() { 
        const { loading, products, error } = this.state;
        
        if( loading ) {
            return 'loading...';
        }

        if( !loading && products ) {
            return products.map( product => <div>{product.name}</div> );
        }

        if( error ) {
            return 'error';
        }
    }

    componentDidMount() {
        if( this.props.products ) {
            return;
        }

        this.setState({
            loading: true,
            products: null,
            error: null
        });

        axios.get( '/api/products' )
            .then(response => {
                this.setState({
                    products: response.data,
                    loading: false
                });
            })
            .catch(error => {
                this.setState({
                    error: error,
                    loading: false
                });
            })
    }
}