import React from 'react';
import * as Styled from '@/components/common/Header/Header.styled';

const Header = () => {
  return (
    <Styled.Header>
      <Styled.GnbLink to="/">Angular / Angular-cli</Styled.GnbLink>
    </Styled.Header>
  );
};

export default Header;
