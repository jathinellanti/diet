// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import WeightLoss from './WeightLoss';
import BurnFat from './BurnFat';
import WeightGain from './WeightGain';
import EmptyPage from './EmptyPage';
import LeafyGreens from './LeafyGreens';
import LeanProteins from './LeanProteins'; // Import LeanProteins component
import './App.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="app-nav">
      {location.pathname !== '/' && <Link to="/" className="nav-link">Home</Link>}
      <Link to="/signup" className="nav-link">Signup</Link>
      <Link to="/login" className="nav-link">Login</Link>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <h1 className="app-title">Diet Balancing</h1>
          <Navbar />
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/weight-loss" element={<WeightLoss />} />
            <Route path="/burn-fat" element={<BurnFat />} />
            <Route path="/weight-gain" element={<WeightGain />} />
            <Route path="/leafy-greens" element={<LeafyGreens />} />
            <Route path="/lean-proteins" element={<LeanProteins />} /> {/* Add route for Lean Proteins */}
            <Route path="/empty" element={<EmptyPage />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2024 Diet Balancing Platform. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
