import toast from 'react-hot-toast';

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

// On success:

// Fetch contacts
export const handleFetchFulfilled = (state, { payload }) => {
  state.items = payload;
};

export const handleAddFulfilled = (state, { payload }) => {
  state.items.push(payload);

  toast.success(`${payload.name} has been added to the phonebook`);
};

// Delete
export const handleDeleteFulfilled = (state, { payload }) => {
  const index = state.items.findIndex(item => item.id === payload.id);
  state.items.splice(index, 1);
  state.currentId = null;

  toast.success('Contact has been deleted');
};

// Edit
export const handleEditFulfilled = (state, { payload }) => {
  const { id, name, phone, email } = payload;
  const contact = state.items.find(item => item.id === id);

  contact.name = name;
  contact.phone = phone;
  contact.email = email;

  toast.success('Changes have been saved');
};
