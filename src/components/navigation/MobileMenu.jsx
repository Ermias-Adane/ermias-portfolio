import React from 'react';
import './Navigation.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Our Services', href: '#services' },
  { label: 'How We Deliver', href: '#how-we-deliver' },
  { label: 'Contact', href: '#contact' }
];

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
      <div className="mobile-menu-content">
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navItems.map((item, index) => (
              <li 
                key={index} 
                className="mobile-nav-item"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a 
                  href={item.href} 
                  className="mobile-nav-link"
                  onClick={onClose}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
