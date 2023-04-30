import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MasinaProvider from './context/MasiniProvider';
import NewCar from './components/NewCar';
import UpdateCar from './components/UpdateCar';

function App() {



  return (
    <BrowserRouter>
      <MasinaProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<NewCar />} />
          <Route path="/update/:id" element={<UpdateCar />} />
        </Routes>
      </MasinaProvider>
    </BrowserRouter>
  );
}

export default App;
