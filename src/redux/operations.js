import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './contacts/slice';

// https://mockapi.io/projects/648a37bd5fa58521cab1030d
axios.defaults.baseURL = 'https://648a37bd5fa58521cab1030c.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('/contacts');
    console.log('response: ', response);
    dispatch(fetchingSuccess(response.data));
    console.log('response.data: ', response.data);
  } catch ({ message }) {
    dispatch(fetchingError(message));
  }
};
