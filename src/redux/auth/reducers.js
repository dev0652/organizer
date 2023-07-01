// Common:
export const handlePending = state => {
  state.isLoading = true;
};
export const handleRejected = (state, { payload, error }) => {
  state.isLoading = false;
  state.error = error ? error.message : payload;
};
export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

// On success:

// Register
export const handleRegisterFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

// Log in
export const handleLoginFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

// Log out
export const handleLogoutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

// Refresh
export const handleRefreshPending = state => {
  state.isRefreshing = true;
};

export const handleRefreshRejected = state => {
  state.isRefreshing = false;
};

export const handleRefreshFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
