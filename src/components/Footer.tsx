import React from 'react';
import { Github, Linkedin, Mail} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-nature">
      {/* Grass and flowers decoration */}
      <div className="grass-container">
        {[...Array(300)].map((_, i) => {
          const randomOffset = (Math.random() - 0.5) * 15;
          const clusterBoost = Math.sin(i * 0.05) * 10;
          return (
            <div
              key={`grass-${i}`}
              className="grass-blade"
              style={{
                left: `${(i / 300) * 100 + randomOffset + clusterBoost}%`,
                animationDelay: `${Math.random() * 2}s`,
                height: `${Math.random() * 50 + 40}px`,
                opacity: 0.7 + Math.random() * 0.3,
              }}
            />
          );
        })}
        {[...Array(20)].map((_, i) => {
          return (
            <div
              key={`flower-${i}`}
              className="flower"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                bottom: `${15 + Math.random() * 15}px`,
              }}
            >
              <div className="flower-petals">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="petal" style={{ transform: `rotate(${j * 72}deg)` }} />
                ))}
                <div className="flower-center" />
              </div>
              <div className="flower-stem" />
            </div>
          );
        })}
      </div>

      {/* Footer content */}
      <div className="footer-main">
        <div className="footer-left">
          <p>&copy; {currentYear} All rights reserved</p>
        </div>

        <div className="footer-right">
          <a href="https://github.com/Sabvl67/" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/qanh-vo/" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <Linkedin size={20} />
          </a>
          <a href="mailto:contact@example.com" className="footer-icon">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
