import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/api';

// Operation generator
const generateOperation = actionType => {
  // 1. Generate the payloadCreator callback for createAsyncThunk
  const payloadCreator = type => async arg => await api[type](arg ? arg : '');
  // 2. . Generate the thunk action creator
  return createAsyncThunk(`auth/${actionType}`, payloadCreator(actionType));
};

// Generated operations
export const register = generateOperation('register');
export const login = generateOperation('login');
export const logout = generateOperation('logout');

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().auth;
  if (!token) return;

  return await api.refresh(token);
});
