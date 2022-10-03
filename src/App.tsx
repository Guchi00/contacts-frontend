import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './navBar/NavBar';
import { Home } from './home/Home';
import { AllContacts } from './allcontacts/AllContacts';
import { Footer } from './footer/Footer';

import './App.css';




function App() {
  return (
    <div className="App">
      <NavBar />
        <div className="router-box">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/GetStarted" element={<AllContacts/>}></Route>
          </Routes>
        </div>
      <Footer />  
    </div>
  );
}
export default App;