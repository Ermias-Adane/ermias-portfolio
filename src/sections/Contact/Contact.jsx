import React from 'react';
import { Phone, Send, Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactMethods = [
    {
      id: 'telegram',
      title: 'Telegram',
      actionText: 'Chat on Telegram',
      description: 'Instant response for project discussions and fast inquiries',
      href: 'https://t.me/Ermias_Adane',
      icon: Send,
      iconClass: 'contact-icon-telegram',
      target: '_blank'
    },
    {
      id: 'phone',
      title: 'Phone Call',
      actionText: 'Call Directly',
      description: 'Direct phone line for quick voice calls',
      href: 'tel:0963093739',
      icon: Phone,
      iconClass: 'contact-icon-phone',
      target: '_self'
    },
    {
      id: 'email',
      title: 'Email',
      actionText: 'Send an Email',
      description: 'Ideal for detailed proposals, briefs, and official inquiries',
      href: 'mailto:ermias.adane42@gmail.com',
      icon: Mail,
      iconClass: 'contact-icon-mail',
      target: '_self'
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        
        <div className="contact-header">
          <div className="contact-badge">
            <Sparkles size={14} />
            <span>Direct Communication</span>
          </div>
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind, need technical consultation, or want to collaborate? Click any option below to reach out directly.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left Column: Action Cards (Hidden raw details, direct click-to-connect) */}
          <div className="contact-cards-container">
            {contactMethods.map((method) => (
              <a 
                key={method.id} 
                href={method.href} 
                target={method.target} 
                rel={method.target === '_blank' ? 'noopener noreferrer' : undefined}
                className="contact-info-card"
                aria-label={method.actionText}
              >
                <div className="contact-info-left">
                  <div className={`contact-icon-wrapper ${method.iconClass}`}>
                    <method.icon size={22} strokeWidth={1.8} />
                  </div>
                  <div className="contact-info-details">
                    <h4>{method.title}</h4>
                    <p className="contact-action-text">{method.actionText}</p>
                    <span className="contact-desc-text">{method.description}</span>
                  </div>
                </div>
                <ArrowUpRight size={20} className="contact-arrow-icon" />
              </a>
            ))}
          </div>

          {/* Right Column: Quick Connect Card */}
          <div className="contact-connect-box">
            <div className="connect-status">
              <span className="status-dot"></span>
              <span>Available for New Projects</span>
            </div>
            
            <div className="connect-prompt">
              <h3>Start a Conversation</h3>
              <p>
                Ready to take your project from concept to deployment? Choose your preferred channel to connect instantly.
              </p>
            </div>

            <div className="connect-actions">
              <a 
                href="https://t.me/Ermias_Adane" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="connect-btn connect-btn-telegram"
              >
                <Send size={18} />
                <span>Message on Telegram</span>
              </a>

              <a 
                href="tel:0963093739" 
                className="connect-btn connect-btn-phone"
              >
                <Phone size={18} />
                <span>Call Directly</span>
              </a>

              <a 
                href="mailto:ermias.adane42@gmail.com" 
                className="connect-btn connect-btn-email"
              >
                <Mail size={18} />
                <span>Send an Email</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
