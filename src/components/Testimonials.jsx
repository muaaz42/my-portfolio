import { Star, MessageSquareQuote, Quote } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Testimonials() {
  const { testimonials } = portfolioData;

  return (
    <section id="testimonials" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquareQuote size={14} color="#ffffff" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="section-title">
            What Founders & <span style={{ color: '#ffffff', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.3)', textUnderlineOffset: '6px' }}>Directors Say</span>
          </h2>
          <p className="section-subtitle">
            Feedback on design craftsmanship, vector precision, dieline accuracy, and creative collaboration.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {testimonials.map((test, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 'var(--radius-lg)',
                position: 'relative'
              }}
            >
              <Quote
                size={38}
                color="#ffffff"
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  opacity: 0.12
                }}
              />

              {/* Star Rating */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1.25rem' }}>
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#ffffff" color="#ffffff" />
                ))}
              </div>

              {/* Content */}
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.96rem',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  marginBottom: '1.75rem',
                  flex: 1
                }}
              >
                "{test.content}"
              </p>

              {/* Author Footer */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
                <img
                  src={test.avatar}
                  alt={test.name}
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid rgba(255, 255, 255, 0.25)'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>
                    {test.name}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {test.role} • <span style={{ color: '#ffffff', fontWeight: 600 }}>{test.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
