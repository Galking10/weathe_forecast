import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import React from 'react'





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:city" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
