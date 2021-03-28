import React from 'react';
import Navbar from './components/Nav/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Products from './components/Products/Products';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Products></Products>
    </div>
  );
}

export default App;
