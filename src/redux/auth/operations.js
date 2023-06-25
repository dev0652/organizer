import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/api';

// Operation generator
function generateOperation(type) {
  function payloadCreator(type) {
    return async arg => await api[type](arg ? arg : '');
  }
  return createAsyncThunk(`auth/${type}`, payloadCreator(type));
}

// Generated operations
export const register = generateOperation('register');
export const login = generateOperation('login');
export const logout = generateOperation('logout');
export const refresh = generateOperation('refresh');
