import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { containerStyle, toastOptions } from 'services/toastOptions';
import { Toaster } from 'react-hot-toast';

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
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            }
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

      <Toaster containerStyle={containerStyle} toastOptions={toastOptions} />
    </>
  );
}
