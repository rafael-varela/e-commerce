import { actionTypes } from '../actions';

const initialState = {
  productsList: [],
  cart: []
};

const eCommerceApp = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.PRODUCTS_LIST_SUCCESS:
      return {
        ...state,
        productsList: action.payload
      }
    case actionTypes.ADD_TO_CART:
      const { data, n: quantity} = action.payload
      return {
        ...state,
        cart: [...state.cart, { ...data, quantity }]
      }
    default:
      return state;
  }
};

export default eCommerceApp;