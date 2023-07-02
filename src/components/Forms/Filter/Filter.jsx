import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filter/slice';
import { selectContacts, selectFilter } from 'redux/selectors';

import { TextField } from './Filter.styled';
import { useEffect } from 'react';

export default function Filter() {
  const { items } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    const textField = document.querySelector('#searchBox');

    if (!textField) return;

    if (items.length === 0) {
      textField.setAttribute('disabled', '');
    }

    if (items.length > 0) {
      textField.removeAttribute('disabled');
    }
  }, [items.length]);

  const handleChange = event => {
    const filter = event.target.value;
    const normalizedFilter = filter.toLowerCase().trim();

    dispatch(updateFilter(normalizedFilter));
  };

  const getMessage = () => {
    if (items.length === 0) return 'Phonebook is empty';
    if (items.length === 1) return 'Not enough contacts to search in';

    return `Search ${items.length} contacts`;
  };

  return (
    <TextField
      type="text"
      value={filter}
      onChange={handleChange}
      placeholder={getMessage()}
      id="searchBox"
    />
  );
}
