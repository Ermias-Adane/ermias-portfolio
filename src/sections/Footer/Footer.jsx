import React from 'react';

const Footer = () => {
  return (
    <footer className="section" style={{ padding: '2rem 0', borderTop: '1px solid var(--border-color)', marginTop: 'auto' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)' }}>&copy; {new Date().getFullYear()} Ermias Adane. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
