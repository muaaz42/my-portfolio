import { useState } from 'react';
import { User, Phone, ArrowUpRight, Check, Sparkles, MessageSquare } from 'lucide-react';
import { LogoDesignIcon, BrandIdentityIcon, SocialMediaIcon, PrintDesignIcon, WhatsAppIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { useToast } from './Toast';
import designerHeroImg from '../assets/designer_hero.png';

export default function Hero({ onOpenServiceModal }) {
  const { personal, whatIDo } = portfolioData;
  const { addToast } = useToast();
  const [copiedPhone, setCopiedPhone] = useState(false);

  const iconMap = {
    LogoDesignIcon: LogoDesignIcon,
    BrandIdentityIcon: BrandIdentityIcon,
    SocialMediaIcon: SocialMediaIcon,
    PrintDesignIcon: PrintDesignIcon
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    addToast(`Phone number (${personal.phone}) copied to clipboard!`);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleServiceClick = (service) => {
    if (onOpenServiceModal) {
      onOpenServiceModal(service);
    } else {
      const el = document.getElementById('what-i-do');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        position: 'relative',
        background: 'radial-gradient(circle at 35% 30%, #202229 0%, #141518 70%, #0d0e10 100%)',
        overflow: 'hidden',
        paddingTop: '90px',
        paddingBottom: '3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      {/* Background Decorative Studio Lighting */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '20%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '15%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Top Minimal Navigation Tagline (from mockup: "Design. Create. Inspire.") */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '1.75rem',
            marginBottom: '1rem',
            paddingRight: '0.5rem'
          }}
        >
          <a
            href="#home"
            style={{
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: 'var(--text-secondary)',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
          >
            Design.
          </a>
          <a
            href="#what-i-do"
            style={{
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: 'var(--text-secondary)',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
          >
            Create.
          </a>
          <a
            href="#projects"
            style={{
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: 'var(--text-secondary)',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
          >
            Inspire.
          </a>
        </div>

        {/* Main Split Poster Area */}
        <div
          className="hero-split-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr)',
            gridTemplateRows: 'auto auto',
            gridTemplateAreas: '"text" "panel"',
            rowGap: '1.25rem',
            alignItems: 'stretch',
            position: 'relative',
            minHeight: '0',
            margin: 'auto 0'
          }}
        >
          {/* Left Column: Headline, Bio & Stats */}
          <div
            className="hero-text-column"
            style={{
              gridArea: 'text',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              zIndex: 2,
              paddingRight: '1rem',
              minWidth: 0
            }}
          >
            {/* Status Indicator */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '1.5rem',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: 'var(--text-secondary)'
              }}
            >
              <span className="status-dot" />
              <span>{personal.availability}</span>
            </div>

            {/* Headline + character side by side */}
            <div
              className="hero-title-row"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem',
                marginBottom: '1.5rem'
              }}
            >
            {/* Main Headline */}
            <div style={{ flex: '1 1 0', minWidth: 0 }}>
              <div
                style={{
                  fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                  marginBottom: '0.2rem'
                }}
              >
                HI, I'M
              </div>
              <h1
                style={{
                  fontSize: 'clamp(2.25rem, 4.2vw, 3.5rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  lineHeight: 1.08,
                  color: '#ffffff',
                  marginBottom: '1rem'
                }}
              >
                A GRAPHIC<br />DESIGNER
              </h1>
              
              {/* Horizontal line accent (from mockup) */}
              <div
                style={{
                  width: '42px',
                  height: '3px',
                  background: '#ffffff',
                  borderRadius: '2px',
                  marginBottom: '1.25rem'
                }}
              />

              <p
                style={{
                  fontSize: 'clamp(0.95rem, 1.4vw, 1.12rem)',
                  color: 'var(--text-secondary)',
                  maxWidth: '440px',
                  lineHeight: 1.6,
                  fontWeight: 400
                }}
              >
                {personal.tagline}
              </p>
            </div>

            <div
              className="hero-portrait-wrap"
              style={{
                flex: '0 0 auto',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
              }}
            >
              <img
                src={designerHeroImg}
                alt="Muaaz, graphic designer"
                width={373}
                height={669}
                fetchPriority="high"
                decoding="async"
                style={{
                  display: 'block',
                  width: 'clamp(260px, 28vw, 400px)',
                  height: 'auto',
                  maxHeight: 'min(560px, 70vh)',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 16px 28px rgba(0, 0, 0, 0.55))'
                }}
              />
            </div>
            </div>

            {/* Vertical Metrics Stack (from mockup: 5+ Years, 100+ Projects, 50+ Clients) */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.4rem',
                marginTop: '1rem',
                marginBottom: '1.5rem'
              }}
            >
              {personal.stats.map((stat, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div
                    style={{
                      fontSize: 'clamp(2.4rem, 3.8vw, 3.2rem)',
                      fontWeight: 900,
                      lineHeight: 1,
                      fontFamily: 'var(--font-heading)',
                      color: '#ffffff',
                      letterSpacing: '-0.03em'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.86rem',
                      fontWeight: 500,
                      color: 'var(--text-muted)',
                      marginTop: '2px',
                      textTransform: 'capitalize'
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn btn-primary">
                <span>View Portfolio</span>
                <ArrowUpRight size={17} />
              </a>
              <a href={personal.whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <WhatsAppIcon size={18} color="#25D366" />
                <span>Quick WhatsApp</span>
              </a>
            </div>

          </div>

          <div
            className="glass-panel hero-glass-column"
            style={{
              gridArea: 'panel',
              padding: '2rem 1.75rem',
              borderRadius: 'var(--radius-lg)',
              position: 'relative',
              overflow: 'hidden',
              zIndex: 3,
              minWidth: 0
            }}
          >
              {/* Panel Header */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#ffffff',
                    marginBottom: '0.25rem'
                  }}
                >
                  GRAPHIC DESIGNER
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', fontWeight: 400 }}>
                  {personal.subTagline}
                </p>
              </div>

              {/* WHAT I DO Section with 4 Linear Icons Grid */}
              <div style={{ marginBottom: '2rem' }}>
                <h4
                  style={{
                    fontSize: '0.86rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#ffffff',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Sparkles size={15} color="#ffffff" />
                  <span>WHAT I DO</span>
                </h4>

                {/* 4 Cards Grid (from mockup: LOGO DESIGN, BRAND IDENTITY, SOCIAL MEDIA DESIGN, PRINT DESIGN) */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px'
                  }}
                >
                  {whatIDo.map((item) => {
                    const IconComponent = iconMap[item.iconType] || LogoDesignIcon;
                    return (
                      <div
                        key={item.id}
                        className="what-i-do-card"
                        onClick={() => handleServiceClick(item)}
                        title={`Click to explore ${item.title}`}
                      >
                        <div className="icon-wrap">
                          <IconComponent size={28} />
                        </div>
                        <span className="card-title">{item.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* LET'S WORK TOGETHER Section (from mockup) */}
              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingTop: '1.25rem'
                }}
              >
                <h4
                  style={{
                    fontSize: '0.86rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#ffffff',
                    marginBottom: '0.35rem'
                  }}
                >
                  LET'S WORK TOGETHER
                </h4>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    marginBottom: '1rem'
                  }}
                >
                  Great design builds great brands. Let's create something amazing!
                </p>

                <a
                  href="#contact"
                  className="btn btn-outline"
                  style={{
                    width: '100%',
                    padding: '0.7rem',
                    fontSize: '0.88rem',
                    borderColor: 'rgba(255, 255, 255, 0.25)',
                    color: '#ffffff'
                  }}
                >
                  <MessageSquare size={16} />
                  <span>Start a Project</span>
                </a>
              </div>
          </div>

        </div>

        {/* Bottom Headline: "DESIGN IS MY PASSION" (exact match from mockup) */}
        <div
          style={{
            textAlign: 'left',
            marginTop: '2rem',
            marginBottom: '2rem',
            position: 'relative',
            zIndex: 2
          }}
        >
          <div
            className="hero-passion-title"
            style={{
              fontSize: 'clamp(3.8rem, 10.5vw, 9.2rem)'
            }}
          >
            DESIGN
          </div>
          <div
            className="hero-passion-sub"
            style={{
              fontSize: 'clamp(1rem, 2.6vw, 2.25rem)'
            }}
          >
            IS MY PASSION
          </div>
        </div>

        {/* Floating Bottom Contact Pill (from mockup: "Name: Pixel Forge | Contact No: +923298339626") */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            position: 'relative',
            zIndex: 10,
            marginTop: '0.5rem'
          }}
        >
          <div className="floating-contact-pill">
            
            {/* User Name Segment */}
            <div className="pill-segment">
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <User size={16} />
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginRight: '6px' }}>Name :</span>
                <span style={{ fontWeight: 700, color: '#ffffff' }}>{personal.name}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="pill-divider" />

            {/* Contact No Segment with Tap-to-Call & Quick WhatsApp */}
            <div className="pill-segment" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <a
                href={`tel:${personal.phoneTel || personal.phone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#ffffff'
                }}
                title="Tap to Call"
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff'
                  }}
                >
                  <Phone size={15} />
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginRight: '6px' }}>Contact No:</span>
                  <span style={{ fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{personal.phone}</span>
                </div>
              </a>

              {/* Copy Phone Button */}
              <button
                onClick={handleCopyPhone}
                style={{
                  padding: '4px 8px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: copiedPhone ? '#10b981' : 'var(--text-secondary)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  transition: 'all 0.2s'
                }}
                title="Copy Phone Number"
              >
                {copiedPhone ? <Check size={13} /> : 'Copy'}
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Hero-specific Media Queries */}
      <style>{`
        @media (max-width: 960px) {
          .hero-title-row {
            flex-direction: column !important;
          }
          .hero-portrait-wrap {
            justify-content: center !important;
            margin: 0 auto;
          }
          .hero-portrait-wrap img {
            width: min(240px, 58vw) !important;
            max-height: 340px !important;
          }
        }
      `}</style>
    </section>
  );
}
