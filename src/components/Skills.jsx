import { useState } from 'react';
import { Palette, Layers, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Proficiencies', icon: Sparkles },
    { id: 'designTools', label: 'Design Software & Suite', icon: Layers },
    { id: 'disciplines', label: 'Visual Disciplines', icon: Palette }
  ];

  const getSkillsToDisplay = () => {
    if (activeTab === 'all') {
      return [
        ...skills.designTools.map(s => ({ ...s, cat: 'Creative Suite' })),
        ...skills.disciplines.map(s => ({ ...s, cat: 'Design Discipline' }))
      ];
    }
    return (skills[activeTab] || []).map(s => ({
      ...s,
      cat: categories.find(c => c.id === activeTab)?.label
    }));
  };

  const displayedSkills = getSkillsToDisplay();

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Palette size={14} color="#ffffff" />
            <span>Creative Arsenal</span>
          </div>
          <h2 className="section-title">
            Software & <span style={{ color: '#ffffff', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.3)', textUnderlineOffset: '6px' }}>Mastery</span>
          </h2>
          <p className="section-subtitle">
            Industry-standard creative tools, vector precision, raster mastery, and physical packaging engineering.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '3.5rem'
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 22px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  background: isActive ? '#ffffff' : 'var(--bg-card)',
                  color: isActive ? '#0f1012' : 'var(--text-secondary)',
                  border: isActive ? '1px solid #ffffff' : '1px solid var(--border-color)',
                  boxShadow: isActive ? '0 4px 18px rgba(255, 255, 255, 0.25)' : 'none'
                }}
              >
                <Icon size={16} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.4rem',
            marginBottom: '3.5rem'
          }}
        >
          {displayedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="glass-card glass-card-interactive"
              style={{
                padding: '1.5rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 700, fontSize: '1.02rem', color: '#ffffff' }}>
                  {skill.name}
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                >
                  {skill.tag}
                </span>
              </div>

              {/* Progress Bar */}
              <div
                style={{
                  width: '100%',
                  height: '6px',
                  borderRadius: '999px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${skill.level}%`,
                    borderRadius: '999px',
                    background: 'linear-gradient(90deg, #ffffff 0%, #a1a7b3 100%)',
                    transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <span>{skill.cat}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
