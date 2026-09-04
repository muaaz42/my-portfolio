import { useState } from 'react';
import { Sparkles, Check, ArrowRight, MessageSquare } from 'lucide-react';
import { LogoDesignIcon, BrandIdentityIcon, SocialMediaIcon, PrintDesignIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Services() {
  const { whatIDo, personal } = portfolioData;
  const [selectedService, setSelectedService] = useState(whatIDo[0]);

  const iconMap = {
    LogoDesignIcon: LogoDesignIcon,
    BrandIdentityIcon: BrandIdentityIcon,
    SocialMediaIcon: SocialMediaIcon,
    PrintDesignIcon: PrintDesignIcon
  };

  return (
    <section id="what-i-do" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} color="#ffffff" />
            <span>Core Disciplines</span>
          </div>
          <h2 className="section-title">
            What I <span style={{ color: '#ffffff', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.3)', textUnderlineOffset: '6px' }}>Create & Master</span>
          </h2>
          <p className="section-subtitle">
            From precision vector marks to full omnichannel brand identities and tactile print packaging.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3.5rem'
          }}
        >
          {whatIDo.map((item) => {
            const Icon = iconMap[item.iconType] || LogoDesignIcon;
            const isSelected = selectedService.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedService(item)}
                className="glass-card glass-card-interactive"
                style={{
                  padding: '2.25rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  borderColor: isSelected ? 'rgba(255, 255, 255, 0.4)' : 'var(--border-color)',
                  background: isSelected ? 'rgba(255, 255, 255, 0.07)' : 'var(--bg-card)',
                  boxShadow: isSelected ? '0 16px 36px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.08)' : 'var(--shadow-sm)'
                }}
              >
                {/* Icon Wrapper */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    marginBottom: '1.5rem',
                    transition: 'transform 0.2s'
                  }}
                >
                  <Icon size={30} />
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: '#ffffff',
                    marginBottom: '0.6rem'
                  }}
                >
                  {item.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                  {item.description}
                </p>

                {/* Deliverables Checklist */}
                <div
                  style={{
                    borderTop: '1px solid var(--border-color)',
                    paddingTop: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}
                >
                  {item.deliverables.map((del, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                      <Check size={14} color="#ffffff" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: '1.5rem',
                    paddingTop: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    color: '#ffffff'
                  }}
                >
                  <span>Inquire Discipline</span>
                  <ArrowRight size={16} />
                </div>

              </div>
            );
          })}
        </div>

        {/* Quick CTA Banner */}
        <div
          className="glass-panel"
          style={{
            padding: '2.5rem 3rem',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem'
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
              Have a custom graphic design inquiry or branding brief?
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Let's discuss timelines, budget, vector assets, and brand storytelling.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary">
              <MessageSquare size={17} />
              <span>Get a Free Quote</span>
            </a>
            <a href={personal.whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <span>Chat via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
