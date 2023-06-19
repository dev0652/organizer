import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const Toast = () => {
  const { toastMessage } = useSelector(selectContacts);

  useEffect(() => {
    toast.success(toastMessage);
  }, [toastMessage]);

  return <div></div>;
};
