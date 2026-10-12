import React, { useState, useEffect } from 'react';
import NavMenu from '../navigation/NavMenu';
import MobileMenu from '../navigation/MobileMenu';
import ThemeToggle from '../navigation/ThemeToggle';
import { useMobileMenu } from '../../hooks/useMobileMenu';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, toggle, close } = useMobileMenu();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        
        {/* Left: Brand Logo */}
        <div className="navbar-left">
          <a href="#home" className="brand-logo" aria-label="Ermias Adane Homepage">
            <div className="logo-circle">
              <span className="logo-letter">E</span>
            </div>
            <div className="brand-text">
              <span className="brand-name">Ermias Adane</span>
              <span className="brand-role">Software Developer</span>
            </div>
          </a>
        </div>

        {/* Center: Desktop Navigation */}
        <div className="navbar-center desktop-nav">
          <NavMenu />
        </div>

        {/* Right: Theme Toggle & Mobile Menu */}
        <div className="navbar-right">
          <ThemeToggle />
          
          <button 
            className="mobile-toggle"
            onClick={toggle}
            aria-label="Toggle menu"
            type="button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>
      
      {/* Mobile Navigation */}
      <MobileMenu isOpen={isOpen} onClose={close} />
    </header>
  );
};

export default Navbar;
