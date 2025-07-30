import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>LiveAuction</Link>
      </div>
      <input
        type="text"
        placeholder="Search Projects..."
        className="navbar-search"
      />
      <div className="navbar-buttons">
        <Link to="/admin-login">
          <button className="nav-btn">Admin Login</button>
        </Link>
        <Link to="/customer-login">
          <button className="nav-btn">Customer Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
