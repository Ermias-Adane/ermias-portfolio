import React from 'react';
import { Phone, Send, Mail, ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactMethods = [
    {
      id: 'telegram',
      title: 'Telegram',
      value: '@Ermias_Adane',
      href: 'https://t.me/Ermias_Adane',
      icon: Send,
      iconClass: 'contact-icon-telegram',
      target: '_blank'
    },
    {
      id: 'phone',
      title: 'Phone Number',
      value: '0963093739',
      href: 'tel:0963093739',
      icon: Phone,
      iconClass: 'contact-icon-phone',
      target: '_self'
    },
    {
      id: 'email',
      title: 'Email Address',
      value: 'ermias.adane42@gmail.com',
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
            <span>Let's Connect</span>
          </div>
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind, need consultation, or want to collaborate? Reach out directly and let's bring your ideas to life.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="contact-cards-container">
            {contactMethods.map((method) => (
              <a 
                key={method.id} 
                href={method.href} 
                target={method.target} 
                rel={method.target === '_blank' ? 'noopener noreferrer' : undefined}
                className="contact-info-card"
              >
                <div className="contact-info-left">
                  <div className={`contact-icon-wrapper ${method.iconClass}`}>
                    <method.icon size={22} strokeWidth={1.8} />
                  </div>
                  <div className="contact-info-details">
                    <h4>{method.title}</h4>
                    <p>{method.value}</p>
                  </div>
                </div>
                <ArrowUpRight size={20} className="contact-arrow-icon" />
              </a>
            ))}
          </div>

          {/* Right Column: Direct Quick Connect Box */}
          <div className="contact-connect-box">
            <div className="connect-status">
              <span className="status-dot"></span>
              <span>Available for New Projects</span>
            </div>
            
            <div className="connect-prompt">
              <h3>Start a Conversation</h3>
              <p>
                I am actively taking on new web and mobile development opportunities. Feel free to ping me directly on Telegram or call anytime for quick discussions.
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
                <span>Message on Telegram (@Ermias_Adane)</span>
              </a>

              <a 
                href="tel:0963093739" 
                className="connect-btn connect-btn-phone"
              >
                <Phone size={18} />
                <span>Call Directly (0963093739)</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
