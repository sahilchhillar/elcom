import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <ul className="navbar-menu">
        <li className="navbar-item-home">Home</li>
        <li className="navbar-item-about">About</li>
        <li className="navbar-item-service">Services</li>
        <li className="navbar-item-contact">Contact</li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search" className="search-box"/>
        <button className="search-button">Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
