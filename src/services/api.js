import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/1';

// ############### User ##########################

export const register = async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  if ('token' in data) setAuthHeader(data.token);
  return data;
};

export const login = async credentials => {
  const response = await axios.post('/users/login', credentials);
  console.log('response in api.login: ', response);

  return response;
};

export const logout = async () => {
  const { data } = await axios.post('/users/logout');
  clearAuthHeader();
  return data;
};

export const refresh = async token => {
  setAuthHeader(token);
  const { data } = await axios.get('/users/current');
  return data;
};

// Utility to add JWT
export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// ############### Contacts ##########################

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

export const editContact = async ({ id, editedContact }) => {
  const { data } = await axios.patch(`/contacts/${id}`, editedContact);
  return data;
};
