// reducers.js
import { SEARCH } from './action';

const initialState = {
  data: [], // Your initial data goes here
  searchQuery: '' // Initial search query
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        searchQuery: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
