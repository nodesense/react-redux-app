import React, {PropTypes} from "react";

import {connect} from "react-redux";


import { bindActionCreators } from 'redux'
import * as CartActions from "../actions";

let Summary = ( {total} ) => {
 
    return (
        <div>
            <h1>Summary</h1>

            Total => {total.toString()}

            <button> Checkout</button>
        </div>
    )
}

Summary.propTypes = {
   items: PropTypes.array
}

function calculateResult(state) {
    let total = 0;
    console.log("total called");

    state.cartState.map ( item => {
        console.log(item.price, item.qty);
        total += item.price * item.qty
    })

    return total;
}
 
const mapStatesToProps = (state) => {
    return {
        items: state.cartState,
        total: calculateResult(state)
    } 
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(CartActions, dispatch),
    }
}


Summary = connect(mapStatesToProps, mapDispatchToProps) (Summary);

export default Summary;