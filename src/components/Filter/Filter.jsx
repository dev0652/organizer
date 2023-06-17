import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filter/slice';
import { selectContacts, selectFilter } from 'redux/selectors';

import { Label, TextField } from './Filter.styled';

const Filter = () => {
  const { items } = useSelector(selectContacts);

  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    const filter = event.target.value;
    const normalizedFilter = filter.toLowerCase().trim();

    dispatch(updateFilter(normalizedFilter));
  };

  return (
    <Label>
      {/* Filter contacts by name */}
      <TextField
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder={`Search ${items.length} contacts`}
      />
    </Label>
  );
};

export default Filter;
