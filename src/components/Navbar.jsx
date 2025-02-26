import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [tavlingarDropdown, setTavlingarDropdown] = useState(false);
  const [omOssDropdown, setOmOssDropdown] = useState(false);

  // Toggle dropdown visibility
  const toggleTavlingarDropdown = () => setTavlingarDropdown(!tavlingarDropdown);
  const toggleOmOssDropdown = () => setOmOssDropdown(!omOssDropdown);

  return (
    <header>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <h1>YOUR LOGO</h1>
        </Link>
        <nav className="nav-links">
          {/* Tävlingar Dropdown */}
          <div className={`nav-dropdown ${tavlingarDropdown ? 'active' : ''}`}>
            <button className="nav-dropdown-toggle" onClick={toggleTavlingarDropdown}>
              Tävlingar
            </button>
            <div className="nav-dropdown-menu">
              <Link to="/ulricehamn" className="nav-dropdown-item">Ulricehamn</Link>
              <Link to="/salen" className="nav-dropdown-item">Sälen</Link>
              <Link to="/hemsedal" className="nav-dropdown-item">Hemsedal</Link>
              <Link to="/kolmarden" className="nav-dropdown-item">Kolmården</Link>
              <Link to="/aim-challenge" className="nav-dropdown-item">Aim Challenge</Link>
              <Link to="/tripplen" className="nav-dropdown-item">Tripplen</Link>
              <Link to="/resultat" className="nav-dropdown-item">Resultat</Link>
            </div>
          </div>

          {/* Om Oss Dropdown */}
          <div className={`nav-dropdown ${omOssDropdown ? 'active' : ''}`}>
            <button className="nav-dropdown-toggle" onClick={toggleOmOssDropdown}>
              Om oss
            </button>
            <div className="nav-dropdown-menu">
              <Link to="/om-oss" className="nav-dropdown-item">Om oss</Link>
              <Link to="/regler" className="nav-dropdown-item">Regler</Link>
              <Link to="/faq" className="nav-dropdown-item">FAQ</Link>
              <Link to="/aim-challenge-historia" className="nav-dropdown-item">Aim Challenge Historia</Link>
            </div>
          </div>

          {/* Other Links */}
          <Link to="/contact" className="nav-item">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
