import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaChartBar, FaHandshake } from "react-icons/fa"; // Importez les icônes appropriées
import { ImCross } from "react-icons/im";
import { Icon } from '@iconify/react';
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
            <li className="nav-item">
              <strong>ACCUEIL</strong> <FaHome />
            </li>
          </Link>
          <Link to='/Sneakers' className='Sneakers'>
            <li>
              <strong>SNEAKERS</strong> <FaChartBar />
            </li>
          </Link>
          <Link to='/Avis' className='Avis'>
            <li>
              <strong>AVIS CLIENTS</strong> <FaHandshake />
            </li>
          </Link>
          {/* Ajoutez la classe 'mobile-linktree-icon' seulement si le menu mobile est ouvert */}
          <li className={`linktree-icon-container ${mobileMenuOpen ? 'mobile-linktree-icon' : ''}`}>
            <a href="https://linktr.ee/_washing" target="_blank" rel="noopener noreferrer">
              {/* Ajoutez la propriété style pour définir la couleur de l'icône Linktree en blanc */}
              <Icon icon="simple-icons:linktree" style={{ color: 'white' }} />
            </a>
          </li>
        </ul>

        <button className='mobile-menu-icon' onClick={handleMobileMenuToggle}>
          {mobileMenuOpen ? <ImCross /> : <FaBars />}
        </button>

        {mobileMenuOpen && (
          <div className="overlay" onClick={handleMobileMenuToggle}>
            <ul className="overlay-links">
              <Link to='/' className='Accueil'>
                <li><strong>ACCUEIL</strong>
                </li>
              </Link>
              <Link to='/Sneakers' className='Sneakers'>
                <li>
                  <strong>SNEAKERS</strong> 
                </li>
              </Link>
              <Link to='/Avis' className='Avis'>
                <li>
                  <strong>AVIS CLIENTS</strong>
                </li>
              </Link>
              <li className={`icon`}>
                <a href="https://linktr.ee/_washing" target="_blank" rel="noopener noreferrer">
                  <Icon icon="simple-icons:linktree" style={{ color: 'white' }} />
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
