import axios from 'axios';

const PRODUCTS_DATA_LOADING = 'PRODUCTS_DATA_LOADING';
const PRODUCTS_DATA_SUCCESS = 'PRODUCTS_DATA_SUCCESS';
const PRODUCTS_DATA_ERROR = 'PRODUCTS_DATA_ERROR';
const ADD_TO_CART = 'ADD_TO_CART';
const TOGGLE_GRID = 'TOGGLE_GRID';
const SELECT_PRODUCT = 'SELECT_PRODUCT';

export const addToCart = (data, n) => ({
  type: ADD_TO_CART,
  payload: { data, n }
});

export const toggleGrid = grid => ({
  type: TOGGLE_GRID,
  payload: { grid }
});

export const selectProduct = product => ({
  type: SELECT_PRODUCT,
  payload: { product }
});

const productsDataLoading = () => ({
  type: PRODUCTS_DATA_LOADING
});

const productsDataSuccess = (data) => ({
  type: PRODUCTS_DATA_SUCCESS,
  payload: data
});

const productsDataError = () => ({
  type: PRODUCTS_DATA_ERROR
});

export const getProductsData = () => dispatch => {
  dispatch(productsDataLoading());
  axios
    .get('https://api.myjson.com/bins/wyjyh')
    .then(response => {
      dispatch(productsDataSuccess(response.data))
    })
    .catch(error => {
      dispatch(productsDataError(error));
    });
}

export const actionTypes = {
  PRODUCTS_DATA_LOADING,
  PRODUCTS_DATA_SUCCESS,
  PRODUCTS_DATA_ERROR,
  ADD_TO_CART,
  TOGGLE_GRID,
  SELECT_PRODUCT
};