import { useState, useEffect } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import { ToastProvider } from './components/Toast';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('portfolio_theme') || 'dark';
    } catch {
      return 'dark';
    }
  });
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('portfolio_theme', theme);
    } catch {
      /* private browsing */
    }
  }, [theme]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ToastProvider>
      <div className="app-container">
        <a href="#home" className="skip-link">Skip to content</a>
        {/* Subtle Ambient Particle Field */}
        <ParticleCanvas />

        {/* Header Navigation */}
        <Navbar
          currentTheme={theme}
          setTheme={setTheme}
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <Services />
          <Projects />
          <Skills />
          <About />
          <Experience />
          <Testimonials />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Spotlight Command Palette (Ctrl+K) */}
        <CommandPalette
          isOpen={commandPaletteOpen}
          onClose={() => setCommandPaletteOpen(false)}
          setTheme={setTheme}
        />
      </div>
    </ToastProvider>
  );
}
