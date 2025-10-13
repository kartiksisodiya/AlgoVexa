import React from 'react';
import '../styles/ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="about-services-section">
      <div className="container">
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>What We Do</h3>
            <p>
              Technology can be complicated, but we're here to simplify it so you can
              focus on your business and not your technology problems.
            </p>
            <a href="#services" className="service-link">View Our Services →</a>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🎯</div>
            <h3>Who We Help</h3>
            <p>
              Our vertical solutions expertise allows
              your business to streamline workflow,
              and increase productivity.
            </p>
            <a href="#industries" className="service-link">Industries We Serve →</a>
          </div>
          
          <div className="service-card">
            <div className="service-icon">⚙️</div>
            <h3>Why Choose Us</h3>
            <p>
              We have a proven process to help you
              evolve your business forward and we're
              here to help you get there.
            </p>
            <a href="#choose" className="service-link">Find Out More →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
