import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/selectors';

export const useAuth = () => ({
  isLoggedIn: useSelector(selectIsLoggedIn),
  isRefreshing: useSelector(selectIsRefreshing),
  user: useSelector(selectUser),
});
