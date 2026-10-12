import React from 'react';
import { Compass, Code2, Zap, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import './HowWeDeliver.css';

const deliverySteps = [
  {
    step: '01',
    title: 'Strategic Discovery',
    icon: Compass,
    description: 'Deep architectural scoping and requirements analysis to ensure every feature aligns directly with your goals.',
    highlights: ['Requirements scoping', 'System architecture', 'Technical roadmapping']
  },
  {
    step: '02',
    title: 'Precision Engineering',
    icon: Code2,
    description: 'Writing high-performance, maintainable code using modern frameworks and responsive component architectures.',
    highlights: ['Clean code standards', 'Modern responsive UI', 'Modular component design']
  },
  {
    step: '03',
    title: 'Agile Collaboration',
    icon: Zap,
    description: 'Continuous feedback loops and transparent communication keep you fully updated at every project milestone.',
    highlights: ['Iterative milestones', 'Transparent updates', 'Fast feedback integration']
  },
  {
    step: '04',
    title: 'Quality & Launch',
    icon: ShieldCheck,
    description: 'Rigorous cross-device testing, performance audits, and smooth CI/CD deployment backed by post-launch reliability.',
    highlights: ['Cross-platform testing', 'Performance & SEO tuning', 'Continuous reliability']
  }
];

const HowWeDeliver = () => {
  return (
    <section id="how-we-deliver" className="section how-we-deliver-section">
      <div className="container">
        
        <div className="deliver-header">
          <div className="deliver-badge">
            <Sparkles size={14} />
            <span>Value-Driven Methodology</span>
          </div>
          <h2 className="deliver-title">How We Deliver Value</h2>
          <p className="deliver-subtitle">
            A structured, transparent engineering process focused on shipping high-impact, performant digital solutions on time.
          </p>
        </div>

        <div className="deliver-grid">
          {deliverySteps.map((item) => (
            <div key={item.step} className="deliver-card">
              <div className="deliver-card-top">
                <div className="deliver-icon-box">
                  <item.icon size={22} strokeWidth={1.75} />
                </div>
                <span className="deliver-step-badge">STEP {item.step}</span>
              </div>
              <h3 className="deliver-card-title">{item.title}</h3>
              <p className="deliver-card-desc">{item.description}</p>
              <div className="deliver-highlights">
                {item.highlights.map((highlight, idx) => (
                  <div key={idx} className="deliver-highlight-item">
                    <CheckCircle2 size={15} className="deliver-highlight-icon" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="deliver-value-banner">
          <div className="deliver-banner-content">
            <h4>Ready to build your next milestone?</h4>
            <p>From initial design to production deployment, we deliver solutions tailored to scale.</p>
          </div>
          <a href="#contact" className="deliver-banner-pill">
            <span>Let's Discuss Your Project</span>
            <Zap size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default HowWeDeliver;
