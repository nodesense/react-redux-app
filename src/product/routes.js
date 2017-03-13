import React from "react";

import {Route, IndexRoute} from "react-router";

import ProductList from "./components/product-list";
import ProductSearch from "./components/product-search";
import ProductEdit from "./components/product-edit";
import ProductLayout from "./components/product-layout";

const routes =  (            
        <Route path="/products" component={ProductLayout} >
            <IndexRoute component={ProductList} />
            <Route path="/products/list" component={ProductList} />
            <Route path="/products/search" component={ProductSearch} />
            <Route path="/products/edit/:id" component={ProductEdit} />
        </Route>
    )

export default  routes;