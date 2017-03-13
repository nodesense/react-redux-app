import React, {PropTypes} from "react";

import { bindActionCreators } from 'redux'

import {connect} from "react-redux";

import 'whatwg-fetch';
import {Link} from "react-router";


class ProductList extends React.Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        console.log("loading products");

        this.props.loadProducts();

    }

    /*
    componentDidMount() {
        var self = this;

        console.log("component did mount");
        fetch('http://localhost:7070/delayed/api/products')
            .then(function(response) {
                //json() returns promise object with pending state
                return response.json();
            })
            .then(function(products) {
                self.setState({
                    products: products,
                    loading: false
                })
            })
            .catch(function(ex) {
                console.error('parsing failed', ex)
            })
    }

     componentDidMount() {
       
        console.log("component did mount");
        fetch('http://localhost:7070/api/products')
            .then( (response) => {
                //json() returns promise object with pending state
                return response.json();
            })
            .then((products) => {
                this.setState({
                    products: products,
                    loading: false
                })
            })
            .catch((ex) => {
                console.error('parsing failed', ex)
            })
    }
    
    */
 

    render() {
        if (!this.props.products) 
            return (
                <div>
                    Loading Products...
                </div>
            )

        console.log(this.props.products);

        //FIXME: do this on action helper
        let sortedProducts = this.props.products.sort ( (left, right) => {
            if (left.name > right.name)
                return 1;
            
            if (left.name < right.name)
                return -1;

            return 0;
        })


        //FIXME: do this on action helper
        let productsElements = sortedProducts.map ( (product, index) => {
            return <tr key={product.id} > 
                    <td>
                        <Link to={`/products/edit/${product.id}`}>     
                            {product.name} - {product.year} 
                        </Link>
                    </td>

                    <td>
                        ${product.price}
                    </td>

                    <td>
                        {product.year}
                    </td>

                    <td>
                        <button onClick={() => this.props.cartActions.addItemtoCart(product)} > +Cart </button>
                    </td>
                    
                </tr>
        })

        return (
            <div ref="divContainer">
                <h2>Product List - {this.props.products.length} </h2>

                <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Year</th>
                        <th>Buy</th>
                    </tr>

                    {productsElements}
                </table>
            </div>
        )
    }

}

ProductList.propTypes = {
    products: PropTypes.array,
    cartActions: PropTypes.object,
    actions: PropTypes.object
}



let productLoad = () => {
    console.log("product load called");

    return (dispatch, getState) => {

        /*
        let productsJson = localStorage.getItem("products");
        if (productsJson) {
            console.log("serving from local");
            dispatch({ type: 'PRODUCTS_INIT',
                                products: JSON.parse(productsJson)});

            return;
        }
        */



        console.log("fetching products");

        fetch('http://localhost:7070/api/products')
            .then( (response) => {
                return response.json();
            })
            .then((products) => {

                /*console.log("storing to local storage");
                //Store to localStorage
                window.localStorage.setItem("products", 
                                            JSON.stringify(products));

                */
                console.log("dispatching products");
                 dispatch({ type: 'PRODUCTS_INIT',
                            products});
            })
    }
}

import * as ProductActions from "../actions";

import * as CartActions from "../../cart/actions";

let mapStateToProps = (state) => {
    return {
        products: state.productState
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        loadProducts: () => dispatch(productLoad()),
        actions: bindActionCreators(ProductActions, dispatch),
        cartActions: bindActionCreators(CartActions, dispatch),
    }
}

ProductList = connect(mapStateToProps, mapDispatchToProps) (ProductList);

export default ProductList;