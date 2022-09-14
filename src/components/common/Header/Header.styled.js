import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Header = styled.header`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 3px solid #000;
`;

const GnbLink = styled(Link)`
  text-decoration: none;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  font-size: 24px;
  margin: 0 0 0 20px;
  padding: 10px;
  border-radius: 10px;
`;

export { Header, GnbLink };
