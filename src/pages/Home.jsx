import React from 'react';
//import { FaHome, FaUserCircle } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
         
          <span>Home</span>
        </div>
        <div className="nav-center">
          <span className="nav-btn active">● Profile</span>
          <span className="nav-btn">● My list</span>
        </div>
        <div className="nav-right">
          <span className="signin">Sign in</span>
        </div>
      </nav>

      {/* Logo */}
      <div className="logo">CAMPUSCRAVE.COM</div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-btn">🔍</button>
      </div>

      {/* Shop by Categories */}
      <div className="section">
        <h3 className="section-title">Shop by categories</h3>
        <div className="card-container">
          <div className="card">Category 1</div>
          <div className="card">Category 2</div>
          <div className="card">Category 3</div>
        </div>
      </div>

      {/* Popular Picks */}
      <div className="section">
        <h3 className="section-title">Popular Picks</h3>
        <div className="card-container">
          <div className="card">Pick 1</div>
          <div className="card">Pick 2</div>
          <div className="card">Pick 3</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
