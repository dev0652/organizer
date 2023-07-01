import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { faker } from '@faker-js/faker';

import Section from 'components/Section';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import Error from 'components/Error';
import Modal from 'components/Modal';
import {
  AddIcon,
  NewContactIconButton,
  Right,
  Sidebar,
  Bar,
  PageWrapper,
  NewRandomContactButton,
  ButtonsWrapper,
  AddRandomIcon,
} from './Contacts.styled';

import { selectContacts } from 'redux/selectors';
import { addContact, fetchContacts } from 'redux/contacts/operations';

import Card from 'components/Card/Card';
import Prompt from 'components/Prompt/Prompt';
import { toast } from 'react-hot-toast';
import ContactDataForm from 'components/Forms/ContactDataForm/ContactDataForm';

// ################################################

export default function Contacts() {
  const { items, isLoading, error, currentId } = useSelector(selectContacts);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    //  const promise = dispatch(fetchContacts())
    // return () => {
    //   // `createAsyncThunk` attaches an `abort()` method to the promise
    //   promise.abort()
    // }
  }, [dispatch]);

  const addRandomContact = () => {
    const randomContact = {
      name: faker.person.fullName(),
      number: faker.phone.number(),
      // email: faker.internet.exampleEmail(),
      // image: faker.internet.avatar(),
    };

    dispatch(addContact(randomContact))
      .then(
        toast.success(`${randomContact.name} has been added to the phonebook`)
      )
      .catch(er => toast.error(er.message));
  };

  return (
    <PageWrapper>
      <Sidebar>
        <Bar>
          <Filter />

          <ButtonsWrapper>
            <NewContactIconButton
              type="button"
              onClick={toggleModal}
              disabled={error}
              aria-label="New contact"
            >
              <AddIcon />
            </NewContactIconButton>

            <NewRandomContactButton
              type="button"
              onClick={addRandomContact}
              disabled={error}
              aria-label="New random contact (for testing)"
            >
              <AddRandomIcon />
            </NewRandomContactButton>
          </ButtonsWrapper>
        </Bar>

        {items.length > 0 && <ContactsList />}
      </Sidebar>

      <Right>
        {!isLoading && error && <Error />}
        {!currentId && !error && <Prompt />}
        {currentId && !error && <Card />}
      </Right>

      {showModal && (
        <Modal onClose={toggleModal}>
          <Section title="New Contact">
            <ContactDataForm formType={'add'} toggleModal={toggleModal} />
          </Section>
        </Modal>
      )}
    </PageWrapper>
  );
}
