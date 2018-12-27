import axios from 'axios';

const PRODUCTS_LIST_LOADING = 'PRODUCTS_LIST_LOADING';
const PRODUCTS_LIST_SUCCESS = 'PRODUCTS_LIST_SUCCESS';
const PRODUCTS_LIST_ERROR = 'PRODUCTS_LIST_ERROR';
const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (data, n) => ({
  type: ADD_TO_CART,
  payload: { data, n }
})

const productsListLoading = () => ({
  type: PRODUCTS_LIST_LOADING
});

const productsListSuccess = (data) => ({
  type: PRODUCTS_LIST_SUCCESS,
  payload: data
});

const productsListError = () => ({
  type: PRODUCTS_LIST_ERROR
});

export const getProductsList = () => dispatch => {
  dispatch(productsListLoading());
  axios
    .get('https://api.myjson.com/bins/wyjyh')
    .then(response => {
      dispatch(productsListSuccess(response.data))
    })
    .catch(error => {
      dispatch(productsListError(error));
    });
}

export const actionTypes = {
  PRODUCTS_LIST_LOADING,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_ERROR,
  ADD_TO_CART
};