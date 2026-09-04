import { useState, useEffect, useRef } from 'react';
import { Search, Compass, Briefcase, Mail, Phone, X, Moon, Sun, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { useToast } from './Toast';

export default function CommandPalette({ isOpen, onClose, setTheme }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const { addToast } = useToast();

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Actions list
  const actions = [
    // Navigation
    { id: 'nav-home', label: 'Go to Hero & Overview', category: 'Navigation', icon: Compass, action: () => scrollTo('home') },
    { id: 'nav-what-i-do', label: 'Go to What I Do (Disciplines)', category: 'Navigation', icon: Sparkles, action: () => scrollTo('what-i-do') },
    { id: 'nav-projects', label: 'Go to Projects & Case Studies', category: 'Navigation', icon: Briefcase, action: () => scrollTo('projects') },
    { id: 'nav-skills', label: 'Go to Skills & Software', category: 'Navigation', icon: Compass, action: () => scrollTo('skills') },
    { id: 'nav-about', label: 'Go to About & Philosophy', category: 'Navigation', icon: Compass, action: () => scrollTo('about') },
    { id: 'nav-exp', label: 'Go to Experience Timeline', category: 'Navigation', icon: Compass, action: () => scrollTo('experience') },
    { id: 'nav-testimonials', label: 'Go to Testimonials', category: 'Navigation', icon: Compass, action: () => scrollTo('testimonials') },
    { id: 'nav-contact', label: 'Go to Contact & Quote', category: 'Navigation', icon: Compass, action: () => scrollTo('contact') },

    // Themes
    { id: 'theme-dark', label: 'Theme: Studio Dark (Default)', category: 'Theme', icon: Moon, action: () => { setTheme('dark'); addToast('Theme switched to Studio Dark'); } },
    { id: 'theme-light', label: 'Theme: Clean Light', category: 'Theme', icon: Sun, action: () => { setTheme('light'); addToast('Theme switched to Clean Light'); } },

    // Quick Actions
    {
      id: 'action-whatsapp',
      label: `Open WhatsApp Direct Chat (${portfolioData.personal.phoneFormatted})`,
      category: 'Actions',
      icon: WhatsAppIcon,
      action: () => window.open(portfolioData.personal.whatsappUrl, '_blank')
    },
    {
      id: 'action-phone',
      label: `Copy Studio Phone (${portfolioData.personal.phone})`,
      category: 'Actions',
      icon: Phone,
      action: () => {
        navigator.clipboard.writeText(portfolioData.personal.phone);
        addToast('Studio phone copied to clipboard!');
      }
    },
    {
      id: 'action-email',
      label: `Copy Studio Email (${portfolioData.personal.email})`,
      category: 'Actions',
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(portfolioData.personal.email);
        addToast('Studio email copied to clipboard!');
      }
    }
  ];

  // Add project search results
  portfolioData.projects.forEach((proj) => {
    actions.push({
      id: `proj-${proj.id}`,
      label: `Case Study: ${proj.title}`,
      category: 'Projects',
      icon: Briefcase,
      action: () => {
        scrollTo('projects');
      }
    });
  });

  const filteredActions = actions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredActions.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % (filteredActions.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredActions[selectedIndex]) {
        filteredActions[selectedIndex].action();
        onClose();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(10px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '15vh 1rem 1rem 1rem',
        animation: 'fadeIn 0.15s ease'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '580px',
          background: 'var(--bg-glass-heavy)',
          border: '1px solid var(--border-hover)',
          borderRadius: '16px',
          boxShadow: 'var(--shadow-lg), var(--shadow-glow)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Search Input */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 20px',
            borderBottom: '1px solid var(--border-color)'
          }}
        >
          <Search size={20} color="#ffffff" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search disciplines, case studies, contact info..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-primary)',
              fontSize: '1rem',
              fontWeight: 500
            }}
          />
          <button
            onClick={onClose}
            style={{
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              padding: '4px',
              borderRadius: '6px'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Action Results */}
        <div
          style={{
            maxHeight: '360px',
            overflowY: 'auto',
            padding: '8px'
          }}
        >
          {filteredActions.length === 0 ? (
            <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              No matching commands or projects found.
            </div>
          ) : (
            filteredActions.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    item.action();
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    background: isSelected ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                    transition: 'all 0.1s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        background: isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isSelected ? '#121316' : 'var(--text-secondary)',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <Icon size={16} />
                    </div>
                    <span style={{ fontWeight: isSelected ? 700 : 400, fontSize: '0.92rem' }}>
                      {item.label}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      background: 'rgba(255, 255, 255, 0.04)'
                    }}
                  >
                    {item.category}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Shortcuts */}
        <div
          style={{
            padding: '10px 18px',
            background: 'rgba(0, 0, 0, 0.25)',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.78rem',
            color: 'var(--text-muted)'
          }}
        >
          <div style={{ display: 'flex', gap: '12px' }}>
            <span><kbd style={{ background: 'var(--bg-tertiary)', padding: '2px 5px', borderRadius: '4px' }}>↑↓</kbd> Navigate</span>
            <span><kbd style={{ background: 'var(--bg-tertiary)', padding: '2px 5px', borderRadius: '4px' }}>↵</kbd> Select</span>
            <span><kbd style={{ background: 'var(--bg-tertiary)', padding: '2px 5px', borderRadius: '4px' }}>esc</kbd> Close</span>
          </div>
          <span>Pixel Forge Spotlight</span>
        </div>
      </div>
    </div>
  );
}
