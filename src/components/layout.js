import React from "react";

import {Link} from "react-router";

 


export default class Layout extends React.Component {

    render() {
            return (
                <div>
                     
                    <nav>
                    <Link to="/home" >Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>

                    <Link to="/notfound">Not found</Link>
                    </nav>
                    
                    

                    <main>
                        <div>
                            {this.props.children}
                        </div>
                    </main>
                </div>

            )
    }
}