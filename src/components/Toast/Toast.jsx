import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

import { Toaster } from 'react-hot-toast';
import { containerStyle, toastOptions } from 'services/toastOptions';

export const Toast = () => {
  const { toastMessage } = useSelector(selectContacts);

  useEffect(() => {
    toast.success(toastMessage);
  }, [toastMessage]);

  return (
    <Toaster containerStyle={containerStyle} toastOptions={toastOptions} />
  );
};
