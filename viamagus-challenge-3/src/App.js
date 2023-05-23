import React from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import DatePage from './DatePage';
import './App.css';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
      <nav className="navbar">
        <h1>Navbar</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/date">Date</Link>
          </li>
        </ul>
      </nav>

      {isHomePage && <h1 className="center">React Date Calculation Page</h1>}

      <Routes>
        <Route path="/date" element={<DatePage />} />
      </Routes>
    </div>
  );
}

export default App;
