import React from "react";

import {Route, IndexRoute} from "react-router";

import Cart from "./components/cart";
import Checkout from "./components/checkout";
import CartLayout from "./components/cart-layout";

const routes =  (            
        <Route path="/cart" component={CartLayout} >
            <IndexRoute component={Cart} />
            <Route path="/cart/checkout" component={Checkout} />
        </Route>
    )

export default  routes;