// reducers.js
import { SET_PAGE } from './action';

const initialState = {
  data: [], // Your initial data goes here
  currentPage: 1 // Initial current page
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
