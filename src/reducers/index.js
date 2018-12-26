import { actionTypes } from '../actions';

const initialState = {
  productsList: []
};

const eCommerceApp = (state = initialState, action) => {
  console.log(action)
  switch(action.type) {
    case actionTypes.PRODUCTS_LIST_SUCCESS:
      return {
        ...state,
        productsList: action.payload
      }
    default:
      return state;
  }
};

export default eCommerceApp;