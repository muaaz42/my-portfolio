import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Search, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon, MuaazLogo } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ currentTheme, setTheme, onOpenCommandPalette }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 30);

        const sections = ['home', 'what-i-do', 'projects', 'skills', 'about', 'experience', 'testimonials', 'contact'];
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 160 && rect.bottom >= 160) {
              setActiveSection(section);
              break;
            }
          }
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'var(--bg-glass-heavy)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'none'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: isScrolled ? '68px' : '82px',
          transition: 'height 0.3s ease'
        }}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '1.35rem',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            color: 'var(--text-primary)'
          }}
        >
          <MuaazLogo size={34} fillBg={true} />
          <div>
            <span>MUAAZ</span> <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.08em' }}>DESIGN</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.04)',
            padding: '6px 14px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-color)',
            backdropFilter: 'blur(12px)'
          }}
          className="desktop-nav"
        >
          {portfolioData.navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  background: isActive ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                  transition: 'all 0.2s ease'
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          
          {/* Quick Search */}
          <button
            onClick={onOpenCommandPalette}
            aria-label="Open command palette"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 12px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-glass-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-muted)',
              fontSize: '0.82rem'
            }}
          >
            <Search size={15} color="#ffffff" />
            <span className="hide-on-mobile">Search</span>
            <kbd
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '2px 5px',
                borderRadius: '4px',
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-secondary)'
              }}
            >
              ⌘K
            </kbd>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="btn-icon"
            aria-label="Toggle theme"
            title="Toggle Theme"
          >
            {currentTheme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          {/* WhatsApp Direct Inquiry */}
          <a
            href={portfolioData.personal.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hide-on-mobile"
            style={{
              padding: '0.65rem 1.25rem',
              fontSize: '0.86rem',
              borderRadius: 'var(--radius-full)'
            }}
          >
            <WhatsAppIcon size={16} />
            <span>Let's Talk</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-icon mobile-menu-btn"
            aria-label="Toggle navigation menu"
            style={{ display: 'none' }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '68px',
            left: 0,
            right: 0,
            background: 'var(--bg-glass-heavy)',
            backdropFilter: 'blur(24px)',
            borderBottom: '1px solid var(--border-color)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: 'var(--shadow-lg)',
            animation: 'fadeIn 0.2s ease'
          }}
        >
          {portfolioData.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '12px 16px',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 600,
                color: '#ffffff',
                background: 'rgba(255, 255, 255, 0.03)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{link.name}</span>
              <ArrowUpRight size={16} color="var(--text-secondary)" />
            </a>
          ))}
          <a
            href={portfolioData.personal.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{ marginTop: '10px', width: '100%' }}
          >
            <WhatsAppIcon size={18} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
        }
        @media (max-width: 899px) {
          .mobile-menu-btn {
            display: inline-flex !important;
          }
          .hide-on-mobile {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
