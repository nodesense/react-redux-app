import React from "react";

import {Link} from "react-router";

class ProductLayout extends React.Component {

    render() {
        console.log("render called");
        return (
                <div>
                    <h2>Products</h2>
                    <div className="nav">
                        <Link to="/products/list">List</Link>
                        <Link to="/products/search">Search</Link>
                        <Link to="/products">Create</Link>
                    </div>

                    <div>
                            {this.props.children}
                    </div>
                </div>
            )
    }
}

export default ProductLayout;