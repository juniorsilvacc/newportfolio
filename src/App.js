import React from 'react';
import Navbar from './components/Nav/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
    </div>
  );
}

export default App;
