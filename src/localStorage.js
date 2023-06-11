const LS_KEY = 'savedContacts';

// ############################

const save = value => {
  try {
    const serializedState = JSON.stringify(value);

    window.localStorage.setItem(LS_KEY, serializedState);
  } catch (error) {
    console.error('Error loading from localStorage: ', error.message);
  }
};

const load = () => {
  try {
    const serializedState = window.localStorage.getItem(LS_KEY);

    return serializedState === null ? null : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const remove = () => {
  try {
    window.localStorage.removeItem(LS_KEY);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const localStorage = {
  save,
  load,
  remove,
};

export default localStorage;
