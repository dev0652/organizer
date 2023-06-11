import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import rootReducer from './reducer';
import localStorage from '../localStorage';

// import defaultContacts from 'data/defaultContacts';

// const preloadedState = { contacts: localStorage.load() ?? defaultContacts, filter: '', };
// export const store = createStore(rootReducer, preloadedState, enhancer);

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

store.subscribe(() => {
  localStorage.save(store.getState().contacts);
});
