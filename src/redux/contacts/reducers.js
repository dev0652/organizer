// Common:
export const handlePending = state => {
  state.isLoading = true;
};
export const handleRejected = (state, { error, payload }) => {
  state.isLoading = false;
  state.error = payload ?? error.message;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  // state.error = null;
};

// On success:

// Fetch contacts
export const handleFetchFulfilled = (state, { payload }) => {
  state.items = payload;
};

// Add a new contact
export const handleAddFulfilled = (state, { payload }) => {
  state.items.push(payload);
};

// Delete a contact
export const handleDeleteFulfilled = (state, { payload }) => {
  const index = state.items.findIndex(item => item.id === payload.id);

  state.items.splice(index, 1);
  state.currentId = null;
};

// Edit a contact
export const handleEditFulfilled = (state, { payload }) => {
  const {
    id,
    name,
    number,
    // email
  } = payload;
  const contact = state.items.find(item => item.id === id);

  contact.name = name;
  contact.number = number;
  // contact.email = email;
};
