import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import { rootReducer } from './reducer';
// import defaultContacts from 'data/defaultContacts';

import localStorage from '../localStorage';

// ################################

// const preloadedState = {
//   contacts: localStorage.load() ?? defaultContacts,

//   filter: '',
// };

// ################################

const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, preloadedState, enhancer);

export const store = createStore(rootReducer, enhancer);

store.subscribe(() => {
  localStorage.save(store.getState().contacts);
});
