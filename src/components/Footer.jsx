import { ArrowUp, Phone } from 'lucide-react';
import { Github, Linkedin, Twitter, WhatsAppIcon, MuaazLogo } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal, navLinks } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        background: 'var(--bg-primary)',
        padding: '4.5rem 0 2.5rem 0',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        
        {/* Main Footer Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Brand & Tag */}
          <div style={{ maxWidth: '400px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '1.45rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
                color: '#ffffff'
              }}
            >
              <MuaazLogo size={34} fillBg={true} />
              <span>MUAAZ DESIGN</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              {personal.tagline}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              alignItems: 'center'
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links & Back To Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href={personal.whatsappUrl}
              target="_blank"
            rel="noopener noreferrer"
              className="btn-icon"
              style={{ width: '2.4rem', height: '2.4rem' }}
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <WhatsAppIcon size={16} />
            </a>
            <a
              href={`tel:${personal.phoneTel || personal.phone}`}
              className="btn-icon"
              style={{ width: '2.4rem', height: '2.4rem' }}
              aria-label="Call"
              title="Call"
            >
              <Phone size={15} />
            </a>
            {personal.socials.github && (
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              style={{ width: '2.4rem', height: '2.4rem' }}
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={16} />
            </a>
            )}
            {personal.socials.linkedin && (
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              style={{ width: '2.4rem', height: '2.4rem' }}
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            )}
            {personal.socials.twitter && (
            <a
              href={personal.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              style={{ width: '2.4rem', height: '2.4rem' }}
              aria-label="Twitter"
              title="Twitter"
            >
              <Twitter size={16} />
            </a>
            )}
            <button
              onClick={scrollToTop}
              className="btn btn-secondary"
              style={{ padding: '0.65rem 1.1rem', fontSize: '0.86rem', marginLeft: '6px' }}
            >
              <span>Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div
          style={{
            borderTop: '1px solid var(--border-color)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.84rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} {personal.name}. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, color: 'var(--text-secondary)' }}>
            <span>DESIGN IS MY PASSION</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
