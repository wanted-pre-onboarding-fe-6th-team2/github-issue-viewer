import React from 'react';
import Container from '@mui/material/Container';
import Header from '@/components/common/Header/Header';

const Layout = ({ children }) => {
  return (
    <Container maxWidth="sm">
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
