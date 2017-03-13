import React from "react";
import {render} from "react-dom";

import {Router, browserHistory} from "react-router";


let countriesList = ["India", "USA", "UK"]

import countryReducer from "./reducers/countries";
import productReducer from "./product/reducers/products";

import cartReducers from "./cart/reducers/cart";

import {createStore, combineReducers, applyMiddleware} from "redux";

import {Provider} from "react-redux";
import { reducer as formReducer } from 'redux-form'

let rootReducer = combineReducers ({
    countries: countryReducer,
    productState: productReducer,
    cartState: cartReducers,

     form: formReducer

})

//let store = createStore(countryReducer, countries);

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

import ReduxThunk from 'redux-thunk'

let store = createStore(rootReducer, 
                        
                        {countries : countriesList},
                        
                        applyMiddleware(ReduxThunk, logger),
                        );



import routes from "./routes";

class App extends React.Component {
    render () {
        return (
                <div>
                  <h1>React-Redux app</h1>
                  <Router history={browserHistory} >
                      {routes}
                  </Router>
                </div>
                )
    }
}


render( (
            <Provider store={store}>
                <App />
            </Provider>
        )       , document.getElementById("root"));
