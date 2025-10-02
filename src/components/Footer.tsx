/**
 * Footer Component
 * Simple footer with copyright and links
 */

import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Anh Vo. Built with React & TypeScript.</p>
        <p className="footer-tagline">Crafted with attention to detail and lots of ☕</p>
      </div>
    </footer>
  );
};
