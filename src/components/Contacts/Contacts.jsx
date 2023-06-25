import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Section from 'components/Section';
import AddForm from 'components/Forms/AddForm';
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

  return (
    <PageWrapper>
      <Sidebar>
        <Section title="Contacts">
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
                onClick={() => dispatch(addContact())}
                disabled={error}
                aria-label="New random contact (for testing)"
              >
                <AddRandomIcon />
              </NewRandomContactButton>
            </ButtonsWrapper>
          </Bar>
        </Section>

        {items.length > 0 && <ContactsList />}
      </Sidebar>

      <Right>
        {!isLoading && error && <Error />}
        {!currentId && !error && <Prompt />}
        {currentId && <Card />}
      </Right>

      {showModal && (
        <Modal onClose={toggleModal}>
          <Section title="New Contact">
            <AddForm toggleModal={toggleModal} />
          </Section>
        </Modal>
      )}
    </PageWrapper>
  );
}
