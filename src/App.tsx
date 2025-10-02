/**
 * Main App Component
 * Assembles all sections and provides theme context
 */

import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          {/* <Skills /> */}
          <Projects />
          {/* <Contact /> */}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
