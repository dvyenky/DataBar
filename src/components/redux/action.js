export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';

export const toggleCheckbox = (id) => {
  return {
    type: TOGGLE_CHECKBOX,
    payload: id
  };
};


export const SET_PAGE = 'SET_PAGE';

export const setPage = (pageNumber) => {
  return {
    type: SET_PAGE,
    payload: pageNumber
  };
};


// actions.js
export const SEARCH = 'SEARCH';

export const search = (query) => {
  return {
    type: SEARCH,
    payload: query
  };
};




