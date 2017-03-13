import * as types from "../constants";
 
let initialState = [];
 
export default (state = initialState, action) => {
    console.log("product reducers", state, action)
    switch(action.type) {
        case types.PRODUCTS_INIT : {
            return action.products;
        };
        break;

        case types.ADD_NEW_PRODUCT: {
            return [...state, action.product];
        }
        break;

        case types.REMOVE_PRODUCT : {
            return state.filter ( product => product.id != action.id)
        }
        break;

        case types.UPDATE_PRODUCT: {
            return state.map(product => product.id === action.product.id ?
                            Object.assign({}, product) :
                            product)
        }
        break;

        case types.EMPTY_CART: {
            //FIXME:
            return [];
        }
        break;

        default: 
            return state;
    }
}