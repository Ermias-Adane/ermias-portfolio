import React, { useRef, useState } from 'react';
import { Globe, Smartphone, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    id: 'web-dev',
    title: 'Web Development',
    icon: Globe,
    description: 'Crafting modern, responsive, and high-performance websites tailored to your brand.',
    features: [
      'Modern responsive websites',
      'Business websites',
      'Personal portfolios',
      'Web applications',
      'Custom frontend experiences'
    ]
  },
  {
    id: 'app-dev',
    title: 'App Development',
    icon: Smartphone,
    description: 'Building intuitive and functional applications across platforms for a seamless user experience.',
    features: [
      'Modern applications',
      'Functional user interfaces',
      'Custom software solutions',
      'Cross-platform experiences'
    ]
  },
  {
    id: 'premium-tools',
    title: 'Premium Tools',
    icon: Wrench,
    description: 'Providing carefully selected software resources and developer tools to boost productivity.',
    features: [
      'Useful premium digital tools',
      'Developer tools',
      'Productivity tools',
      'Carefully selected resources'
    ]
  }
];

const ServiceCard = ({ service }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className="service-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
      }}
      tabIndex={0}
      aria-label={`Service: ${service.title}`}
    >
      <div className="service-card-glow" style={{ opacity: isHovered ? 1 : 0 }} />
      <div className="service-card-content">
        <div className="service-card-header">
          <div className="service-icon-wrapper">
            <service.icon size={24} strokeWidth={1.5} />
          </div>
          <h3 className="service-card-title">{service.title}</h3>
        </div>
        <p className="service-card-description">{service.description}</p>
        
        <ul className="service-features" aria-label={`Features of ${service.title}`}>
          {service.features.map((feature, idx) => (
            <li key={idx} className="service-feature">
              <CheckCircle2 className="service-feature-icon" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="service-card-action">
          <span>Explore Service</span>
          <ArrowRight className="service-card-action-icon" />
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            Delivering high-quality digital solutions engineered for performance and designed for impact.
          </p>
        </div>
        
        <div className="services-grid">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
