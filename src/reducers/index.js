import { actionTypes } from '../actions';

const initialState = {
  productsData: [],
  cart: [],
  grid: true,
  selectedProduct: {}
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
      return {
        ...state,
        cart: [...state.cart, { ...data, quantity }]
      };
    case actionTypes.TOGGLE_GRID:
      return {
        ...state,
        grid: action.payload.grid
      };
    case actionTypes.SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: { ...action.payload.product }
      }
    default:
      return state;
  }
};

export default eCommerceApp;