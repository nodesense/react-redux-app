import * as types from "../constants";
 
let initialState = [];

 
export default (state = initialState, action) => {
    console.log("cart reducer ", state, action);

    switch(action.type) {
        case types.ADD_ITEM_TO_CART: {
            let item = state.find( item => item.id == action.item.id);
            
            if (item) {
                console.warn("Found item ", item.id);
                item.qty += 1;
                return state.map(cartItem => cartItem.id === action.item.id ?
                            Object.assign({}, item) :
                            item)

            } 
            
            return [...state, action.item];
        }
        break;

        case types.REMOVE_ITEM_FROM_CART : {
            return state.filter ( item => item.id != action.id)
        }
        break;

        case types.UPDATE_ITEM_QUANTITY: {
            return state.map(item => item.id === action.id ?
                            Object.assign({}, item, { qty: action.qty }) :
                            item)
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