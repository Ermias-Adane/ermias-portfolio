import React from 'react';
import Button from '../../components/ui/Button';
import { ArrowRight, Code2, Smartphone, Terminal, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="section hero-section">
      {/* Background grid pattern */}
      <div className="hero-bg-grid"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Available for New Projects · Software Developer</span>
          </div>
          
          <h1 className="hero-title">
            Crafting Digital <br/>
            <span className="text-gradient">Experiences</span> That <br/>
            Defy the Ordinary.
          </h1>
          
          <p className="hero-subtitle">
            Specializing in modern Web Development, high-performance Mobile Applications, and custom digital tools engineered for reliability and impact.
          </p>
          
          <div className="hero-cta-group">
            <a href="#services" tabIndex="-1">
              <Button variant="primary" className="hero-btn">
                Explore Services
                <ArrowRight size={18} />
              </Button>
            </a>
            <a href="#contact" tabIndex="-1">
              <Button variant="outline" className="hero-btn">
                Get in Touch
              </Button>
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-card primary-card">
            <div className="card-header">
              <span className="mac-dot red"></span>
              <span className="mac-dot yellow"></span>
              <span className="mac-dot green"></span>
            </div>
            <div className="card-body">
              <Code2 className="card-icon" />
              <div className="card-text-placeholder"></div>
              <div className="card-text-placeholder short"></div>
            </div>
          </div>
          
          <div className="visual-card secondary-card">
             <Smartphone className="card-icon" />
             <div className="card-details">
                <div className="card-line"></div>
                <div className="card-line short"></div>
             </div>
          </div>
          
          <div className="visual-card tertiary-card">
            <Terminal className="card-icon" size={20} />
            <div className="card-text-placeholder mini"></div>
          </div>

          <div className="glow-orb"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
