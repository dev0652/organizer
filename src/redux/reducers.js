// Common:
export const handlePending = state => {
  state.isLoading = true;
};
export const handleRejected = (state, { error: { message } }) => {
  state.isLoading = false;
  state.error = message;
};
export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

// Specific:
export const handleFetchFulfilled = (state, { payload }) => {
  state.items = payload;
};

export const handleAddFulfilled = (state, { payload }) => {
  state.items.push(payload);
};

export const handleDeleteFulfilled = (state, { payload }) => {
  const index = state.items.findIndex(item => item.id === payload.id);
  state.items.splice(index, 1);
  state.currentId = null;
};
