import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <header>
      <h1 className='header-text'>SG Wicks</h1>
      <h2 className='header-text'>Developer, Writer, Student</h2>
      <nav>
        <Link to='/'>Home</Link> |<Link to='/portfolio'>Portfolio</Link> |{' '}
        <Link to='/about'>About</Link> | <Link to='/contact'>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
