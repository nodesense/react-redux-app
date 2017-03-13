import React from "react";

import 'whatwg-fetch';

import Promise from "bluebird";

import {browserHistory, hashHistory} from "react-router";

import ProductEditForm from './product-edit-form';

export default class ProductEdit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            product: {},

            brands: []
        }

        this.nameChangeHandler = this.nameChangeHandler.bind(this);
    
        this.valueChanged = this.valueChanged.bind(this);

        this.saveProduct = this.saveProduct.bind(this);
    }

    handleSubmit (values) { 
    // Do something with the form values
    console.log(values);
  }

    fetchProduct() {
        return fetch(`http://localhost:7070/api/products/${this.props.params.id}`)
            .then(function(response) {
                //json() returns promise object with pending state
                return response.json();
            })
    }

    fetchBrands() {
        return fetch(`http://localhost:7070/api/brands`)
            .then(function(response) {
                //json() returns promise object with pending state
                return response.json();
            })
    }

    componentDidMount() {
        console.log(this.props.params.id);
        /*
        this.fetchProduct()
        .then ( (product) => {
            this.setState ({product});
        })

        this.fetchBrands()
        .then ( brands => {
            this.setState({brands});
        })
        */

        Promise.all([
            this.fetchProduct(),
            this.fetchBrands()
        ])
        .then( ([product, brands]) => {
            this.setState ({product, brands})
        })

        this.nameInput.focus();

    }

    nameChangeHandler (event) {
        console.log(event.target.value);

        //FIXME: find destructure for dict
        let product = this.state.product;
        product.name = event.target.value;

        this.setState({product});
    }

    valueChanged(event, fieldName) {
        console.log(fieldName);

            let product = this.state.product;
            product[fieldName] = event.target.value;

            this.setState({product});
    }

    gotoList() {
        hashHistory.push('/products');
    }

    saveProduct($event) {
        $event.stopPropagation();
        $event.preventDefault();
      
        return fetch(`http://localhost:7070/api/products/${this.props.params.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(this.state.product),
        })
        .then(response => {
            console.log('request succeeded with JSON response', response);
            return response.json();
        })
        .then ( product => {
            console.log("saved product ", product);
            return product;
        })
        .catch(err => {
            console.log('request failed', err);
        });

    }

    

    render() {

        let options = this.state.brands.map ( brand => {
            return <option value={brand.id} key={brand.id}>{brand.name} </option>
        })


        return (
            <div>
 
                <button onClick={this.gotoList}>List</button>

                <h2>Edit page - {this.state.product.name}</h2>


  <ProductEditForm onSubmit={this.handleSubmit} />

    <form  onSubmit={this.saveProduct}> 
       <p> Name <input name="name" value={this.state.product.name}
        
        onChange={this.nameChangeHandler}

        ref={(input) => this.nameInput = input}

            />
        </p>

        <p> Year <input name="year" 
                        value={this.state.product.year}
                        onChange= { (event) => this.valueChanged(event, "year")}
            />
        </p>

        <p>

            Brand <select name="brandId" 
                        value={this.state.product.brandId}

                        onChange= { (event) => this.valueChanged(event, "brandId")}   
                >
                    
                {options}

                </select>
        </p>

        <p>
            <button type="submit">Save Product</button>
        </p>

    </form>
            </div>
        )
    }
}