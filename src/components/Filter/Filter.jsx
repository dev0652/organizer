import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <Label>
    Filter contacts by name
    <input type="text" value={value} onChange={onChange} />
  </Label>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
