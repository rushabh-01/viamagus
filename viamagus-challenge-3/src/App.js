import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DatePage from './DatePage';
import './App.css';
import Navbar from './Navbar';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';


  return (
    <div>
      <Navbar/>

      {isHomePage && <h1 className="center">React Date Calculation Page</h1>}

      <Routes>
        <Route path="/date" element={<DatePage />} />
      </Routes>
    </div>
  );
}

export default App;
