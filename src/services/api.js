import axios from 'axios';

// Project: https://mockapi.io/projects/648a37bd5fa58521cab1030d
axios.defaults.baseURL = 'https://648a37bd5fa58521cab1030c.mockapi.io';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};
