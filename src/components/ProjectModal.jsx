import { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, TrendingUp } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.82)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.2s ease'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '780px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'var(--bg-glass-heavy)',
          border: '1px solid var(--border-hover)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg), var(--shadow-glow)',
          padding: '2.5rem',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="btn-icon"
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem'
          }}
        >
          <X size={20} />
        </button>

        {/* Category Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.85rem' }}>
          <span
            style={{
              padding: '4px 12px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em'
            }}
          >
            {project.category}
          </span>
          {project.badge && (
            <span
              style={{
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                fontSize: '0.78rem',
                fontWeight: 600
              }}
            >
              {project.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>
          {project.title}
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', fontWeight: 500, marginBottom: '1.5rem' }}>
          {project.tagline}
        </p>

        {/* Metrics Banner */}
        {project.metrics && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 18px',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              marginBottom: '1.75rem',
              fontSize: '0.94rem',
              fontWeight: 600,
              color: '#ffffff'
            }}
          >
            <TrendingUp size={18} color="#ffffff" />
            <span>{project.metrics}</span>
          </div>
        )}

        {/* Overview */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.6rem', color: '#ffffff' }}>
            Creative Brief & Concept
          </h4>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.96rem' }}>
            {project.description}
          </p>
        </div>

        {/* Challenge & Solution Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
            marginBottom: '1.75rem'
          }}
        >
          {/* Challenge */}
          <div
            style={{
              padding: '1.25rem',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#ffffff', fontWeight: 700, fontSize: '0.92rem' }}>
              <AlertTriangle size={17} />
              <span>Design Challenge</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div
            style={{
              padding: '1.25rem',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#ffffff', fontWeight: 700, fontSize: '0.92rem' }}>
              <Lightbulb size={17} />
              <span>Visual Solution</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features & Deliverables */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem', color: '#ffffff' }}>
            Delivered Brand Assets
          </h4>
          <div style={{ display: 'grid', gap: '8px' }}>
            {project.keyFeatures.map((feat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} color="#ffffff" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Software Toolchain */}
        <div style={{ marginBottom: '2.25rem' }}>
          <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem', color: '#ffffff' }}>
            Creative Software Used
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.technologies.map((t, i) => (
              <span
                key={i}
                className="badge"
                style={{
                  padding: '5px 12px',
                  fontSize: '0.84rem',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid var(--border-color)',
                  color: '#ffffff'
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ flex: 1, minWidth: '180px' }}
          >
            <span>View on Behance</span>
            <ExternalLink size={16} />
          </a>
          <a
            href="#contact"
            onClick={onClose}
            className="btn btn-secondary"
            style={{ flex: 1, minWidth: '180px' }}
          >
            <span>Commission Similar Work</span>
          </a>
        </div>
      </div>
    </div>
  );
}
