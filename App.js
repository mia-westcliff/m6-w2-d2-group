import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from './actionTypes';

const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
        return {
            ...state,
            cart: [...state.cart, action.payload]
          };
    
        case UPDATE_ITEM:
          return {
            ...state,
            cart: state.cart.map(item =>
              item.itemId === action.payload.itemId
                ? { ...item, qty: action.payload.qty }
                : item
            )
          };
    
        case DELETE_ITEM:
          return {
            ...state,
            cart: state.cart.filter(item => item.itemId !== action.payload.itemId)
          };
    
        default:
          return state;
  }
};

export default cartReducer;
