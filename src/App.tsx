import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MasinaProvider from './context/MasiniProvider';

function App() {



  return (
    <BrowserRouter>
      <MasinaProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MasinaProvider>
    </BrowserRouter>
  );
}

export default App;
