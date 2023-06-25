// Common:
export const handlePending = state => {
  state.isLoading = true;
};
export const handleRejected = (state, { error: { message } }) => {
  state.isLoading = false;
  state.toastTypeAuth = 'error';
  state.error = message;
  state.toastMessageAuth = message;
};
export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
  state.toastTypeAuth = 'success';
};

// On success:

// Sign up
export const handleRegisterFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;

  state.toastMessageAuth =
    'Registration successful. Please sign in with your new account';
};

// Sign in
export const handleLoginFulfilled = (state, { payload }) => {
  state.toastMessageAuth = 'You have signed in to your account';
};

// Sign out
export const handleLogoutFulfilled = state => {
  state.user.name = null;
  state.user.email = null;
  state.token = null;
  state.isLoggedIn = false;
  state.toastMessageAuth = 'You have signed out of your account';
};

// Refresh
export const handleRefreshFulfilled = (state, { payload }) => {
  // state.toastMessageAuth = 'You have signed out of your account';
};
