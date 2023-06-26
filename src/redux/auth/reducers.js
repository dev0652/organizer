// Common:
export const handlePending = state => {
  state.isLoading = true;
};
export const handleRejected = (state, { error: { message } }) => {
  state.isLoading = false;
  state.toastTypeAuth = 'error';
  state.toastMessageAuth = message;
  state.error = message;
};
export const handleFulfilled = state => {
  state.isLoading = false;
  state.toastTypeAuth = 'success';
  state.error = null;
};

// On success:

// Register
export const handleRegisterFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;

  state.toastMessageAuth =
    'Registration successful! You have been signed in to your account';
};

// Log in
export const handleLoginFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.toastMessageAuth = 'You have signed in to your account';
};

// Log out
export const handleLogoutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.toastMessageAuth = 'You have signed out of your account';
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
