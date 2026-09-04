import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} color="#ffffff" />
            <span>Design Milestones</span>
          </div>
          <h2 className="section-title">
            Studio Track Record & <span style={{ color: '#ffffff', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.3)', textUnderlineOffset: '6px' }}>Experience</span>
          </h2>
          <p className="section-subtitle">
            A chronological timeline of brand direction roles, agency contributions, and client milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            position: 'relative',
            paddingLeft: '2rem'
          }}
        >
          {/* Vertical Connecting Spine */}
          <div
            style={{
              position: 'absolute',
              top: '15px',
              bottom: '15px',
              left: '7px',
              width: '2px',
              background: 'linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.3), rgba(255,255,255,0.05))'
            }}
          />

          {experiences.map((exp, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                marginBottom: index === experiences.length - 1 ? 0 : '2.5rem'
              }}
            >
              {/* Timeline Indicator Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-2rem',
                  top: '1.25rem',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: '#121316',
                  border: '3px solid #ffffff',
                  boxShadow: '0 0 12px rgba(255, 255, 255, 0.4)',
                  zIndex: 2
                }}
              />

              {/* Experience Card */}
              <div className="glass-card" style={{ padding: '1.75rem 2rem' }}>
                
                {/* Header Info */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px',
                    marginBottom: '0.6rem'
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      color: '#ffffff',
                      padding: '3px 12px',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </span>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.84rem',
                      color: 'var(--text-muted)'
                    }}
                  >
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </span>
                </div>

                {/* Role and Company */}
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.2rem' }}>
                  {exp.role}
                </h3>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '1rem' }}>
                  {exp.company}
                </h4>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div style={{ display: 'grid', gap: '8px', marginBottom: '1.25rem' }}>
                  {exp.achievements.map((ach, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={15} color="#ffffff" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Software / Skills Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {exp.technologies.map((t, i) => (
                    <span key={i} className="badge">
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
