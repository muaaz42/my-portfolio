import { useState } from 'react';
import { Search, ExternalLink, Eye, Sparkles } from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Brand Identity', 'Logo Design', 'Print Design', 'Social Media Design'];

  const filteredProjects = portfolioData.projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} color="#ffffff" />
            <span>Curated Portfolio</span>
          </div>
          <h2 className="section-title">
            Featured <span style={{ color: '#ffffff', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.3)', textUnderlineOffset: '6px' }}>Design Works</span>
          </h2>
          <p className="section-subtitle">
            Explore recent brand identities, packaging dielines, vector marks, and visual campaign systems.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            alignItems: 'center',
            marginBottom: '3.5rem'
          }}
        >
          {/* Category Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              justifyContent: 'center'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  background: selectedCategory === cat ? '#ffffff' : 'var(--bg-card)',
                  color: selectedCategory === cat ? '#0f1012' : 'var(--text-secondary)',
                  border: selectedCategory === cat ? '1px solid #ffffff' : '1px solid var(--border-color)',
                  boxShadow: selectedCategory === cat ? '0 4px 18px rgba(255, 255, 255, 0.25)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '400px'
            }}
          >
            <Search
              size={17}
              color="var(--text-muted)"
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            />
            <input
              type="text"
              placeholder="Search design systems, logos, packaging..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '11px 16px 11px 44px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                fontSize: '0.88rem',
                outline: 'none',
                transition: 'border-color 0.2s ease'
              }}
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>No projects match your filter or search query.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="btn btn-outline"
              style={{ marginTop: '0.5rem' }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '2rem'
            }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card glass-card-interactive"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden'
                }}
              >
                {/* Visual Header Banner */}
                <div
                  style={{
                    height: '150px',
                    background: 'linear-gradient(135deg, #1c1d22 0%, #121316 100%)',
                    borderBottom: '1px solid var(--border-color)',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(255, 255, 255, 0.08)',
                        color: '#ffffff',
                        border: '1px solid rgba(255, 255, 255, 0.15)'
                      }}
                    >
                      {project.category}
                    </span>
                    {project.badge && (
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          padding: '3px 10px',
                          borderRadius: 'var(--radius-full)',
                          background: 'rgba(255, 255, 255, 0.15)',
                          color: '#ffffff'
                        }}
                      >
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.01em' }}>
                    {project.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.4rem', flex: 1 }}>
                    {project.description}
                  </p>

                  {/* Software & Skills Badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' }}>
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="badge">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="badge" style={{ color: '#ffffff' }}>
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Actions Footer */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid var(--border-color)',
                      paddingTop: '1.25rem',
                      marginTop: 'auto'
                    }}
                  >
                    <button
                      onClick={() => setActiveModalProject(project)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: '#ffffff'
                      }}
                    >
                      <Eye size={16} />
                      <span>Case Study</span>
                    </button>

                    <div style={{ display: 'flex', gap: '8px' }}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-icon"
                        style={{ width: '2.3rem', height: '2.3rem' }}
                        aria-label="View on Behance"
                        title="Behance Showcase"
                      >
                        <ExternalLink size={15} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-icon"
                        style={{ width: '2.3rem', height: '2.3rem' }}
                        aria-label="View on Dribbble"
                        title="Dribbble Shots"
                      >
                        <Github size={15} />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
