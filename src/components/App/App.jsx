import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Section from 'components/Section';
import Form from 'components/Form';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import Notification from 'components/Notification';
import Modal from 'components/Modal/Modal';
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
} from './App.styled';

import { selectContacts } from 'redux/selectors';
import { addContact, fetchContacts } from 'redux/operations';

import { Loading } from 'notiflix/build/notiflix-loading-aio';
import loaderOptions from 'services/loaderOptions';
import { Card } from 'components/Card/Card';

// ################################################

export default function App() {
  const { items, isLoading, error, currentId } = useSelector(selectContacts);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading ? Loading.dots(loaderOptions) : Loading.remove()}

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

          {/* {items.length === 0 && !isLoading && (
            <p>There are no contacts to display</p>
          )} */}

          {items.length > 0 && <Contacts />}
        </Sidebar>

        <Right>
          {!isLoading && error && <Notification message={error} />}
          {currentId && <Card />}
        </Right>

        {showModal && (
          <Modal onClose={toggleModal}>
            <Section title="New Contact">
              <Form toggleModal={toggleModal} />
            </Section>
          </Modal>
        )}
      </PageWrapper>
    </>
  );
}
