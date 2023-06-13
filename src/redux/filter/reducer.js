import { createReducer } from '@reduxjs/toolkit';
import { updateFilter } from './actions';

const initialState = '';

const properties = {
  [updateFilter]: (state, action) => action.payload,
};

const filterReducer = createReducer(initialState, properties);

export default filterReducer;
