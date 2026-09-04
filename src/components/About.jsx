import { User, MapPin, Mail, Phone, Sparkles, ShieldCheck, Zap, PenTool, Layout } from 'lucide-react';
import { WhatsAppIcon, MuaazLogo } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const coreValues = [
    {
      icon: PenTool,
      title: "Vector Precision",
      description: "Mathematical bezier perfection ensuring logos scale flawlessly from mobile favicons to skyscraper wraps."
    },
    {
      icon: Layout,
      title: "Swiss Grid & Typography",
      description: "Disciplined typography hierarchies and balanced white-space tension that direct user focus and command respect."
    },
    {
      icon: Sparkles,
      title: "Visual Storytelling",
      description: "Infusing emotional resonance and memorable brand personality into every packaging box, palette, and symbol."
    },
    {
      icon: Zap,
      title: "Production Ready",
      description: "100% CMYK press-ready dielines, spot colors, foil stamp separations, and organized Figma/Illustrator master archives."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={14} color="#ffffff" />
            <span>Behind The Craft</span>
          </div>
          <h2 className="section-title">
            Design Ethos & <span style={{ color: '#ffffff', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.3)', textUnderlineOffset: '6px' }}>Philosophy</span>
          </h2>
          <p className="section-subtitle">
            A glimpse into the creative standards, design methodology, and perfectionism behind Pixel Forge.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Creator Profile Card */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            {/* Monogram Badge */}
            <div
              style={{
                width: '110px',
                height: '110px',
                borderRadius: '28px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)'
              }}
            >
              <MuaazLogo size={64} fillBg={true} />
            </div>

            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem' }}>{personal.name}</h3>
            <p style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              {personal.role}
            </p>

            {/* Quick Details */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                padding: '1.25rem',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-color)',
                marginBottom: '1.5rem',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <MapPin size={16} color="#ffffff" />
                <span>{personal.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <Mail size={16} color="#ffffff" />
                <span style={{ wordBreak: 'break-all' }}>{personal.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <Phone size={16} color="#ffffff" />
                <span>{personal.phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <ShieldCheck size={16} color="#10b981" />
                <span>Verified Independent Graphic Studio</span>
              </div>
            </div>

            <a href={personal.whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
              <WhatsAppIcon size={18} />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>

          {/* Right Column: Bio & Core Values */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            
            <div className="glass-card" style={{ padding: '2.25rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={20} color="#ffffff" />
                <span>Visual Craftsmanship</span>
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
                {personal.bio}
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                Great design is never decoration — it is strategic clarity. Every curve in a monogram, every point of leading in editorial layout, and every Pantone ink swatch selected is calculated to amplify brand authority.
              </p>
            </div>

            {/* Core Values 2x2 Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem'
              }}
            >
              {coreValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card glass-card-interactive"
                    style={{ padding: '1.5rem' }}
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        marginBottom: '1rem'
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>{val.title}</h4>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
