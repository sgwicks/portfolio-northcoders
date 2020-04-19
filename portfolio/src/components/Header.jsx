import React from 'react';

const Header = () => {
  return (
    <header>
      <h1 className='header-text'>SG Wicks</h1>
      <h2 className='header-text'>Developer, Writer, Student</h2>
      <nav>
        <a href='index.html'>Home</a> | <a href='portfolio.html'>Portfolio</a> |{' '}
        <a href='about.html'>About</a> | <a href='contact.html'>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
