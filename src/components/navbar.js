import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from './Logo-st.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='logo-link'>
          <img src={logo} alt="logo" />
        </Link>
        <h3 className='logo'><strong><strong></strong></strong></h3>
        
        <ul className={mobileMenuOpen ? "nav-links-mobile invisible" : "nav-links"}>
          <Link to='/' className='Accueil'>
            <li><strong>ACCUEIL</strong></li>
          </Link>
          <Link to='/Stock' className='STOCK'>
            <li><strong>STOCK</strong></li>
          </Link>
          <Link to='/News' className='News'>
            <li><strong>NEWS</strong></li>
          </Link>
        </ul>

        <button className='mobile-menu-icon' onClick={handleMobileMenuToggle}>
          {mobileMenuOpen ? <ImCross /> : <FaBars />}
        </button>

        {mobileMenuOpen && (
          <div className="overlay" onClick={handleMobileMenuToggle}>
            <ul className="overlay-links">
              <Link to='/' className='Accueil'>
                <li><strong>ACCUEIL</strong></li>
              </Link>
              <Link to='/Stock' className='STOCK'>
                <li><strong>STOCK</strong></li>
              </Link>
              <Link to='/News' className='News'>
                <li><strong>NEWS</strong></li>
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
