import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';

import { UserName, Wrapper } from './UserBar.styled';
import { BaseButton as LogoutButton } from 'styling/buttons';
import { logout } from 'redux/auth/operations';

export default function UserBar() {
  const {
    user: { name },
  } = useSelector(selectAuth);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Wrapper>
      <div>
        Hello <UserName>{name}</UserName>
      </div>
      <LogoutButton variant="outlined" type="button" onClick={handleLogout}>
        Log out
      </LogoutButton>
    </Wrapper>
  );
}
