import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';

import * as ops from 'redux/auth/operations';
import * as r from 'redux/auth/reducers';

// ################################################

const extraActions = [ops.register, ops.login, ops.logout, ops.refresh];

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,

    toastMessageAuth: null,
    toastTypeAuth: 'success',
    isLoading: false,
    error: null,
  },
  reducers: {
    resetToastMessageAuth(state) {
      state.toastMessageAuth = null;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(ops.register.fulfilled, r.handleRegisterFulfilled)
      .addCase(ops.login.fulfilled, r.handleLoginFulfilled)
      .addCase(ops.logout.fulfilled, r.handleLogoutFulfilled)

      .addCase(ops.refresh.pending, r.handleRefreshPending)
      .addCase(ops.refresh.rejected, r.handleRefreshRejected)
      .addCase(ops.refresh.fulfilled, r.handleRefreshFulfilled)

      .addMatcher(isFulfilled(...extraActions), r.handleFulfilled)
      .addMatcher(isPending(...extraActions), r.handlePending)
      .addMatcher(isRejected(...extraActions), r.handleRejected),
});

export const { resetToastMessageAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;
