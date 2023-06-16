import axios from 'axios';

// Project: https://mockapi.io/projects/648a37bd5fa58521cab1030d

axios.defaults.baseURL = 'https://648a37bd5fa58521cab1030c.mockapi.io';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContact = async newContact => {
  const { data } = await axios.post('/contacts', newContact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
