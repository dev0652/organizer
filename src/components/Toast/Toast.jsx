import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { containerStyle, toastOptions } from 'services/toastOptions';
import { resetToastMessage } from 'redux/contacts/slice';

export const Toast = () => {
  const { toastType, toastMessage } = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toastMessage) toast[toastType](toastMessage);

    return () => {
      dispatch(resetToastMessage());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toastMessage]);

  return (
    <Toaster containerStyle={containerStyle} toastOptions={toastOptions} />
  );
};
