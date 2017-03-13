import React from "react";
import {Link} from "react-router";

export default class CartLayout extends React.Component {

    render() {
            return (
                <div className="nav">
                    <div>
                        <Link to="/cart">List</Link>
                        <Link to="/cart/checkout">Checkout</Link>
                    </div>

                    <div>
                            {this.props.children}
                    </div>
                </div>
            )
    }
}