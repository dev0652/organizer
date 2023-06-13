import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filter/slice';

import { Label } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = event => {
    const filter = event.target.value;
    const normalizedFilter = filter.toLowerCase().trim();

    dispatch(updateFilter(normalizedFilter));
  };

  return (
    <Label>
      Filter contacts by name
      <input type="text" value={filter} onChange={handleChange} />
    </Label>
  );
};

export default Filter;
