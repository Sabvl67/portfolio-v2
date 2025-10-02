import React, { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LinkedInIcon, GitHubIcon, EmailIcon, UserIcon } from './Icons';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-minimal">
      {/* Left Sidebar */}
      <div className="hero-sidebar-left">
        <div>
          <ThemeToggle />
        </div>
        <div className="sidebar-line"></div>
        <span className="sidebar-text"> Scroll down</span>
      </div>

      {/* Right Sidebar */}
      <div className="hero-sidebar-right">
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href="mailto:your@email.com" className="social-icon" aria-label="Email">
            <EmailIcon />
          </a>
        </div>
        <div className="sidebar-line"></div>
      </div>

      {/* Main Content */}
      <div className={`hero-main-content ${isVisible ? 'fade-in' : ''}`}>
        <h1 className="hero-title">
          <span className="title-main">Humanized</span>
          <span className="title-gradient">Design.</span>
        </h1>
        <p className="hero-tagline">
          I transform thorny problems into elegant solutions using visual design, rapid prototyping, and interaction skills.
        </p>
        <a href="#about" className="hero-link">
          Know more →
        </a>
      </div>

      {/* Profile Circle */}
      <div className="hero-profile">
        <div className="profile-circle">
          <UserIcon className="profile-icon" />
        </div>
        <span className="profile-text">Animated animal here</span>
      </div>
    </section>
  );
};
