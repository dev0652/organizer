import React from 'react';

// import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
import { NavLink, matchPath, useLocation } from 'react-router-dom';

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }
  return null;
}

export default function PageNav({ isLoggedIn }) {
  const routeMatch = useRouteMatch(['/', '/contacts']);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}>
      <Tab label="Home" value="/" to="/" component={NavLink} />

      {isLoggedIn && (
        <Tab
          label="Contacts"
          value="/contacts"
          to="/contacts"
          component={NavLink}
        />
      )}
    </Tabs>
  );
}
