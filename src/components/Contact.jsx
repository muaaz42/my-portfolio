import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { Github, Linkedin, Twitter, Discord, WhatsAppIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { useToast } from './Toast';

export default function Contact() {
  const { personal } = portfolioData;
  const { addToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Brand Identity',
    budget: '$500 - $1,500',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    addToast('Email address copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    addToast('Phone number copied to clipboard!');
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      addToast('Please complete all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      addToast('Thank you! Your design brief has been sent successfully.');
      setFormData({ name: '', email: '', projectType: 'Brand Identity', budget: '$500 - $1,500', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} color="#ffffff" />
            <span>Start a Project</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span style={{ color: '#ffffff', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.3)', textUnderlineOffset: '6px' }}>Extraordinary</span>
          </h2>
          <p className="section-subtitle">
            Have an upcoming rebrand, logo requirement, or packaging project? Reach out below.
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
          {/* Left Column: Direct Contact & WhatsApp */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div className="glass-card" style={{ padding: '2.25rem' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem' }}>
                Contact & Studio Line
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Available for worldwide remote commissions, freelance brand sprints, and agency partnerships.
              </p>

              {/* Direct Info List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                
                {/* Phone Item with Direct Call & Copy */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff'
                      }}
                    >
                      <Phone size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Direct Phone / Studio</div>
                      <a
                        href={`tel:${personal.phone}`}
                        style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-mono)' }}
                      >
                        {personal.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="btn-icon"
                    style={{ width: '2.2rem', height: '2.2rem' }}
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Email Item */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff'
                      }}
                    >
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Email Address</div>
                      <a
                        href={`mailto:${personal.email}`}
                        style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="btn-icon"
                    style={{ width: '2.2rem', height: '2.2rem' }}
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* WhatsApp Quick Link */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(37, 211, 102, 0.08)',
                    border: '1px solid rgba(37, 211, 102, 0.25)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: '#25D366',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff'
                      }}
                    >
                      <WhatsAppIcon size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#25D366', fontWeight: 600 }}>Fast Response</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
                        Chat directly on WhatsApp
                      </div>
                    </div>
                  </div>
                  <a
                    href={personal.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ padding: '6px 14px', fontSize: '0.82rem' }}
                  >
                    Open Chat
                  </a>
                </div>

                {/* Location */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff'
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Location & Timezone</div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#ffffff' }}>
                      {personal.location}
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div style={{ marginTop: '2rem' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>
                  Connect on Socials
                </h4>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <a href={personal.socials.github} target="_blank" rel="noreferrer" className="btn-icon" aria-label="GitHub" title="GitHub">
                    <Github size={18} />
                  </a>
                  <a href={personal.socials.linkedin} target="_blank" rel="noreferrer" className="btn-icon" aria-label="LinkedIn" title="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href={personal.socials.twitter} target="_blank" rel="noreferrer" className="btn-icon" aria-label="Twitter" title="Twitter">
                    <Twitter size={18} />
                  </a>
                  {personal.socials.discord && (
                    <a href={personal.socials.discord} target="_blank" rel="noreferrer" className="btn-icon" aria-label="Discord" title="Discord">
                      <Discord size={18} />
                    </a>
                  )}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Design Brief Form */}
          <div className="glass-card" style={{ padding: '2.25rem' }}>
            
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
              Send a Design Brief
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.75rem' }}>
              Fill out the details below and I'll get back with a proposal within 24 hours.
            </p>

            {isSubmitted ? (
              <div
                style={{
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    margin: '0 auto 1.25rem auto',
                    boxShadow: '0 0 24px rgba(16, 185, 129, 0.5)'
                  }}
                >
                  <Check size={32} />
                </div>
                <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>Brief Received!</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  Thank you for reaching out. I'll review your project requirements and respond promptly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-secondary"
                >
                  Send Another Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Name & Email Inputs */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.25rem'
                  }}
                >
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      Your Name / Brand *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        transition: 'border-color 0.2s ease'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        transition: 'border-color 0.2s ease'
                      }}
                    />
                  </div>
                </div>

                {/* Project Type & Budget Range */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.25rem'
                  }}
                >
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      Project Discipline
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        background: '#18191d',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        outline: 'none'
                      }}
                    >
                      <option value="Brand Identity">Brand Identity System</option>
                      <option value="Logo Design">Logo & Monogram Design</option>
                      <option value="Social Media Design">Social Media Campaign Art</option>
                      <option value="Print Design">Print, Packaging & Dielines</option>
                      <option value="Full Retainer">Full Monthly Retainer</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        background: '#18191d',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        outline: 'none'
                      }}
                    >
                      <option value="$300 - $800">$300 - $800 (Starter)</option>
                      <option value="$800 - $2,000">$800 - $2,000 (Standard Brand)</option>
                      <option value="$2,000 - $5,000">$2,000 - $5,000 (Full Identity & 3D)</option>
                      <option value="$5,000+">$5,000+ (Enterprise Scale)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    Project Overview & Timeline *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your brand vision, target audience, and preferred timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease'
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', marginTop: '0.5rem' }}
                >
                  {isSubmitting ? (
                    <span>Sending Brief...</span>
                  ) : (
                    <>
                      <span>Submit Project Brief</span>
                      <Send size={18} />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
