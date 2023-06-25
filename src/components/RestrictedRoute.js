import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuth } from 'redux/selectors';

export default function RestrictedRoute({ component, redirectTo = '/' }) {
  const { isLoggedIn } = useSelector(selectAuth);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}
