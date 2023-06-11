import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addContact } from 'redux/actions';
import { FormWrapper, Label } from './Form.styled';

// ################################################

export default function Form({ toggleModal }) {
  //
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  // Update input on change
  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  // On form submit
  const handleSubmit = event => {
    event.preventDefault();

    dispatch(addContact(name, number));
    reset();
    toggleModal();
  };

  // Reset local state (and form)
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>

      <Label>
        Number
        <input
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[\\-.\s]?\(?\d{1,3}?\)?[\\-.\s]?\d{1,4}[\\-.\s]?\d{1,4}[\\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>

      <button type="submit">Add contact</button>
    </FormWrapper>
  );
}
