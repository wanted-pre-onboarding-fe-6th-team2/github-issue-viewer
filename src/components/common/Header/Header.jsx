import React from 'react';
import * as Styled from '@/components/common/Header/Header.styled';
import { ROUTES } from '@/constants/route';

const Header = () => {
  return (
    <Styled.Header>
      <Styled.GnbLink to={ROUTES.HOME}>Angular / Angular-cli</Styled.GnbLink>
    </Styled.Header>
  );
};

export default Header;
