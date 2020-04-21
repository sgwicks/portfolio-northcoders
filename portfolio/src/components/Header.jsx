import React from 'react';
import { NavLink, HeaderStyle, Nav } from '../styles/HeaderStyles';

const Header = () => {
  return (
    <HeaderStyle>
      <h1 className='header-text'>SG Wicks</h1>
      <h2 className='header-text'>Developer, Writer, Student</h2>
      <Nav>
        <NavLink to='/'>Home</NavLink> |{'  '}
        <NavLink to='/portfolio'>Portfolio</NavLink> |{'  '}
        <NavLink to='/about'>About</NavLink> |{'  '}
        <NavLink to='/contact'>Contact</NavLink>
      </Nav>
    </HeaderStyle>
  );
};

export default Header;
