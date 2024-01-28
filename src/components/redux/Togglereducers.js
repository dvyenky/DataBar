// reducers.js
import { TOGGLE_CHECKBOX } from './action';

const initialState = {
  data: [], // Your initial data goes here
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX:
      return {
        ...state,
        data: state.data.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              checked: !item.checked
            };
          }
          return item;
        })
      };
    default:
      return state;
  }
};

export default reducer;
