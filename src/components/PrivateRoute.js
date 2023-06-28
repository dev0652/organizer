import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuth } from 'redux/selectors';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/login',
}) {
  //
  const { isLoggedIn, isRefreshing } = useSelector(selectAuth);
  const shouldRedirect = !isRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
