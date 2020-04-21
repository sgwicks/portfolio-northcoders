import styled from 'styled-components';
import { Link } from '@reach/router';

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 16pt;
  color: white;
`;

export const HeaderStyle = styled.header`
  background-color: rgb(102, 102, 51, 0.8);
  min-width: 70%;
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid black 3px;
  color: white;
`;

export const Nav = styled.nav`
  margin-bottom: 0.5em;
`;
