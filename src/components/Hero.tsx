import React, { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LinkedInIcon, GitHubIcon, EmailIcon } from './Icons';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="hero-minimal">
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
          <div className="title-line">
            <span className="title-main">Turning </span>
            <span className="title-gradient">Ideas</span>
          </div>
          <div className="title-line">
            <span className="title-main">into </span>
            <span className="title-gradient">Impact</span>
          </div>
        </h1>
        <p className="hero-tagline">
          Full-stack developer combining creative problem-solving with clean code to build applications that make a difference. Let's create something extraordinary together.
        </p>
        <a href="#footer" className="hero-link">
          Create Some →
        </a>
      </div>

      {/* Profile Circle */}
      <div className="hero-profile">
        <div className="profile-circle">
          <DotLottieReact
            src="https://lottie.host/fb4709e8-eec9-4c5c-b242-213d2d0066e7/QjRluEi6rk.lottie"
            loop
            autoplay
            style={{ width: '100%', height: '100%', background: 'transparent' }}
          />
        </div>
      </div>
    </section>
  );
};
