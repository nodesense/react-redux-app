import React, {PropTypes} from "react";

import { bindActionCreators } from 'redux'

import {connect} from "react-redux";

import Rx from "rxjs";


import 'whatwg-fetch';
import {Link} from "react-router";


class ProductSearch extends React.Component {

    constructor(props) {
        super(props);

        this.searchProduct = this.searchProduct.bind(this);
        this.state = {
            searchResults: []
        }

        this.textChange = new Rx.Subject()
              .map ( text => text.trim())
              .filter ( text => text.length > 0)
              .debounceTime(1000)
              .subscribe ( text => {
                this.filterText(text);
              })
    }

    filterText(searchText) {
        console.log("Searching ", searchText);
        let products = this.props.products.filter ( (product, index) => {
              
            return product.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
        });

        this.setState({
            searchResults: products
        })
    }

    searchProduct() {
        console.log("test ", this.refs.searchInput.value);
        let searchText = this.refs.searchInput.value.trim();
        this.textChange.next(searchText);
    }
    
    componentDidMount() {
        console.log("loading products");

    }
 

    render() {
        if (!this.props.products) 
            return (
                <div>
                    Loading Products...
                </div>
        )

        //FIXME: do this on action helper
        let productsElements = this.state.searchResults.map ( (product, index) => {
            return <tr key={product.id} > 
                    <td>
                        <Link to={`/products/edit/${product.id}`}>     
                            {product.name} - {product.year} 
                        </Link>
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
                <h2>Search </h2>

               <input ref="searchInput" onChange={this.searchProduct} name="searchInput" />

                <table>
                    <tr>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Buy</th>
                    </tr>

                    {productsElements}
                </table>
            </div>
        )
    }

}

ProductSearch.propTypes = {
    products: PropTypes.array,
    cartActions: PropTypes.object,
    actions: PropTypes.object
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
        actions: bindActionCreators(ProductActions, dispatch),
        cartActions: bindActionCreators(CartActions, dispatch)
    }
}

ProductSearch = connect(mapStateToProps, mapDispatchToProps) (ProductSearch);

export default ProductSearch;