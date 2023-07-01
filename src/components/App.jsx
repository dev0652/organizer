import { lazy, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { refresh } from 'redux/auth/operations';
import { selectAuth } from 'redux/selectors';

import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

import SharedLayout from 'components/SharedLayout';
import NotFound from 'pages/NotFound';
import Register from 'pages/Register';
import Login from 'pages/Login';

const Home = lazy(() => import('pages/Home'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
// const Register = lazy(() => import('pages/Register'));
// const Login = lazy(() => import('pages/Login'));
// const NotFound = lazy(() => import('pages/NotFound'));

// ################################################

export default function App() {
  const { isRefreshing, token } = useSelector(selectAuth);
  const dispatch = useDispatch();

  // https://nikolamargit.dev/skip-useeffect-hook-on-first-render/
  const isFirstRender = useRef(false);

  useEffect(() => {
    if (!token) return;

    if (isFirstRender.current) {
      dispatch(refresh());
    } else {
      isFirstRender.current = true;
    }
  }, [dispatch, token]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={<PrivateRoute component={<ContactsPage />} />}
          />
        </Route>

        <Route
          path="register"
          element={
            <RestrictedRoute component={<Register />} redirectTo="/contacts" />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute component={<Login />} redirectTo="/contacts" />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    )
  );
}
