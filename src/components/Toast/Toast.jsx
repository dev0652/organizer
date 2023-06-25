import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth, selectContacts } from 'redux/selectors';

import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { containerStyle, toastOptions } from 'services/toastOptions';

import { resetToastMessage } from 'redux/contacts/slice';
import { resetToastMessageAuth } from 'redux/auth/slice';

export default function Toast() {
  const { toastType, toastMessage } = useSelector(selectContacts);
  const { toastTypeAuth, toastMessageAuth } = useSelector(selectAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    const message = toastMessage || toastMessageAuth || null;

    let type;
    let resetAction;

    if (message === toastMessage) {
      type = toastType;
      resetAction = resetToastMessage;
    }
    if (message === toastMessageAuth) {
      type = toastTypeAuth;
      resetAction = resetToastMessageAuth;
    }

    if (message) toast[type](message);

    return () => {
      dispatch(resetAction());
      // dispatch(resetToastMessage());
      // dispatch(resetToastMessageAuth());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, toastMessage, toastMessageAuth]);

  return (
    <Toaster containerStyle={containerStyle} toastOptions={toastOptions} />
  );
}
