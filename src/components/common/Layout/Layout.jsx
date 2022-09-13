import React from 'react';
import Container from '@mui/material/Container';

const Layout = ({ children }) => {
  return <Container maxWidth="sm">{children}</Container>;
};

export default Layout;
