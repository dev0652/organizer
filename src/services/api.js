import axios from 'axios';

// Backend: https://mockapi.io/projects/648a37bd5fa58521cab1030d

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  return data;
};

export const login = async credentials => {
  const { data } = await axios.post('/users/login', credentials);
  return data;
};

export const logout = async () => {
  const { data } = await axios.post('/users/logout');
  return data;
};

export const refresh = async () => {
  const { data } = await axios.get('/users/me');
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
