import React, {PropTypes} from "react";
import {connect} from "react-redux";

import { bindActionCreators } from 'redux'
import * as CartActions from "../actions";

import Summary from "./summary";

class Cart extends React.Component {
    render() {

             let cartItemList = this.props.items.map ( (item, index) => {
            return <tr key={item.id} > 
                    <td>
                            {item.name} - {item.year}       
                    </td>

                    <td>
                        {item.qty}
                    </td>

                    <td>
                        {item.price}
                    </td>


                    <td>
                        {item.qty * item.price}
                    </td>

                     <td>
                        <button onClick={ () => this.props.actions.removeItemFromCart(item.id)}>       Remove
                        </button>
                    </td>

                </tr>
        })

            return (
                <div>
                   <h2>Cart - {this.props.items.length} Items</h2>

                   <button onClick={ () => this.props.actions.emptyCart()}> Clear </button>
                <table>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>

                    {cartItemList}
                    </tbody>
                </table>

              <Summary />

                </div>
            )
    }
}

Cart.propTypes = {
    items: PropTypes.array
}

const mapStatesToProps = (state) => {
    return {
        items: state.cartState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(CartActions, dispatch),
    }
}

Cart = connect(mapStatesToProps, mapDispatchToProps) (Cart);

export default Cart;