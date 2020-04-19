import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { Router } from '@reach/router';
import About from './components/About';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router className='router'>
        <Home path='/' />
        <About path='/about' />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
