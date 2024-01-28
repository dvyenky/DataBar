// store.js
import { createStore } from 'redux';
// import reducer from './redux/SearchBarreducers';
// import reducer from './redux/SetPagereducers';
import reducer from './redux/Togglereducers';

const store = createStore(reducer);

export default store;
