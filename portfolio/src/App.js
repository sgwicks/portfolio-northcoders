import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { Router } from '@reach/router';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import CV from './components/CV';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router className='router'>
        <Portfolio path='/' />
        <About path='/about' />
        <CV path='/cv' />
        <Contact path='/contact' />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
