
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EdukasiPage from './pages/EdukasiPage';
import PekerjaanPage from './pages/PekerjaanPage';
import DiskusiPage from './pages/DiskusiPage';
import React, {useEffect, useState} from 'react';

function App() {
  
  const endpoint = "http://localhost:3001/api/v1/users";
  const fetchUser = async() => {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    fetchUser();
  });

  return (
    <>
      <Router> 
        <Navbar /> 
        <Routes> 
          <Route path="/" element={<EdukasiPage />} /> 
          <Route path="/pekerjaan" element={<PekerjaanPage />} /> 
          <Route path="/diskusi" element={<DiskusiPage />} /> 
        </Routes> 
      </Router>
    </>
  )
}

export default App
