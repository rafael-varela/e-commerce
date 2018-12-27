import { actionTypes } from '../actions';

const localStorageCart = JSON.parse(localStorage.getItem('ecommercetestcart'));

const initialState = {
  productsData: [],
  cart: localStorageCart || [],
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
      const { data, n: quantity} = action.payload;
      const cart = state.cart.filter(p => p._id !== data._id);
      const newCartData = [...cart, { ...data, quantity }];
      localStorage.setItem('ecommercetestcart', JSON.stringify(newCartData));
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
      localStorage.setItem('ecommercetestcart', JSON.stringify([]));
      return {
        ...state,
        cart: []
      }
    default:
      return state;
  }
};

export default eCommerceApp;