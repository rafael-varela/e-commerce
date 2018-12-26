import { TEST_ACTION } from '../actions';

const initialState = {
  text: ''
};

const eCommerceApp = (state = initialState, action) => {
  console.log(action);
  switch(action.type) {
    case TEST_ACTION:
      return {
        ...state,
        text: action.text
      }
    default:
      return state;
  }
};

export default eCommerceApp;