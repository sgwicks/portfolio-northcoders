import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { Router } from '@reach/router';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import CV from './components/CV';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router className='router'>
        <Portfolio path='/' />
        <Home path='/about' />
        <CV path='/cv' />
        {/* <About path='/about' /> */}
        <Contact path='/contact' />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
