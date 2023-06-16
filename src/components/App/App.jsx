import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Section from 'components/Section';
import Form from 'components/Form';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import Notification from 'components/Notification';
import Modal from 'components/Modal/Modal';
import {
  // ButtonsWrapper,
  // ErrorWrapper,
  // LoadDefaultsButton,
  OpenModalButton,
  Wrapper,
} from './App.styled';

import { getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import { Loading } from 'notiflix/build/notiflix-loading-aio';
import loaderOptions from 'services/loaderOptions';

// ################################################

export default function App() {
  const { items, isLoading, error } = useSelector(getContacts);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    // const promise = dispatch(fetchContacts());

    // return () => {
    //   promise.abort();
    // };
  }, [dispatch]);

  // const handleLoadDefaults = () => {
  //   dispatch(loadDefaults());
  //   toast.success('Default contacts loaded', {
  //     style: { background: 'Lavender' },
  //     icon: '💾',
  //   });
  // };

  // #### Render

  return (
    <>
      {isLoading ? Loading.dots(loaderOptions) : Loading.remove()}

      <Wrapper>
        {showModal && (
          <Modal onClose={toggleModal}>
            <Section title="Add Contact">
              <Form toggleModal={toggleModal} />
            </Section>
          </Modal>
        )}

        {/* <ButtonsWrapper> */}
        <OpenModalButton type="button" onClick={toggleModal} disabled={error}>
          New contact
        </OpenModalButton>

        {/* <LoadDefaultsButton
          type="button"
          onClick={handleLoadDefaults}
          disabled={isDefault}
        >
          Load defaults
        </LoadDefaultsButton> */}
        {/* </ButtonsWrapper> */}

        <Section title="Contacts">
          {!isLoading && error && (
            // <ErrorWrapper>
            <Notification message={error} />
            // </ErrorWrapper>
          )}

          {items.length === 0 && !isLoading && !error && (
            <Notification message="Your phonebook is empty" />
          )}

          {items.length > 1 && <Filter />}

          {items.length > 0 && <Contacts />}
        </Section>
      </Wrapper>
    </>
  );
}
