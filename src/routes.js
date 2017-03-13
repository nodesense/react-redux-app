import React from "react";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import Layout from "./components/layout";
import Home from "./components/home";
import About from "./components/about";
import NotFound from "./components/notfound";
import Contact from "./components/contact";

/*
import ProductList from "./product/components/product-list";
import ProductEdit from "./product/components/product-edit";
import ProductLayout from "./product/components/product-layout";
*/

import {productRoutes} from "./product";

import {cartRoutes} from "./cart";

const routes = (
         
               <Route path="/" component={Layout} >
                  <IndexRoute component={Home} />
                  <Route path="/home" component={Home} />
                   
                  {productRoutes}

                  {cartRoutes}

                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  
                  <Route path="*" component={NotFound} />

               </Route>
         
    )

 
export default routes;



