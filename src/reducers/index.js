import { actionTypes } from '../actions';

const initialState = {
  productsData: [],
  cart: [],
  grid: true,
  selectedProduct: null
};

const eCommerceApp = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.PRODUCTS_DATA_SUCCESS:
      return {
        ...state,
        productsData: action.payload
      };
    case actionTypes.ADD_TO_CART:
      const { data, n: quantity} = action.payload
      const cart = state.cart.filter(p => p._id !== data._id)
      return {
        ...state,
        cart: [...cart, { ...data, quantity }]
      };
    case actionTypes.TOGGLE_GRID:
      return {
        ...state,
        grid: action.payload.grid
      };
    case actionTypes.SELECT_PRODUCT:
      const product = action.payload.product;
      return {
        ...state,
        selectedProduct: product ? { ...product } : product
      };
    case actionTypes.BUY_PRODUCTS:
      return {
        ...state,
        cart: []
      }
    default:
      return state;
  }
};

export default eCommerceApp;