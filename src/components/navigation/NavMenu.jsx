import React from 'react';
import './Navigation.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Our Services', href: '#services' },
  { label: 'How We Deliver', href: '#how-we-deliver' },
  { label: 'Contact', href: '#contact' }
];

const NavMenu = () => {
  return (
    <nav className="nav-menu">
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <li key={index} className="nav-item">
            <a href={item.href} className="nav-link">
              {item.label}
              <span className="nav-indicator"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
