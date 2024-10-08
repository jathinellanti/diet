import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        {/* Conditionally render the Home link */}
        {location.pathname !== '/' && (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}
        <li>
          <Link to="/weight-loss">Weight Loss</Link>
        </li>
        <li>
          <Link to="/burn-fat">Burn Fat</Link>
        </li>
        <li>
          <Link to="/weight-gain">Weight Gain</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
