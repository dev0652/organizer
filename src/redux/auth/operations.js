import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/api';

// Operation generator
const generateOperation = actionType => {
  // 1. Declare the payloadCreator generator function
  const payloadCreator = type => async (arg, thunkAPI) => {
    if (type !== 'refresh') return await api[type](arg ? arg : '');
    // Handle specific case of 'refresh'
    const { token } = thunkAPI.getState().auth;
    if (!token) return;
    return await api.refresh(token);
  };
  // 2. Generate the thunk action creator function
  return createAsyncThunk(`auth/${actionType}`, payloadCreator(actionType));
};

// Generated operations
export const register = generateOperation('register');
export const login = generateOperation('login');
export const logout = generateOperation('logout');
export const refresh = generateOperation('refresh');
