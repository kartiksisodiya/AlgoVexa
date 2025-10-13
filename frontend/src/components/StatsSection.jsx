import React from 'react';
import '../styles/StatsSection.css';

const StatsSection = () => {
  return (
    <section className="about-stats-section">
      <div className="container">
        <h2>Outreach by the Numbers</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon">👥</div>
            <div className="stat-number">500+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">🏆</div>
            <div className="stat-number">125</div>
            <div className="stat-label">Get Awards</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">📋</div>
            <div className="stat-number">45</div>
            <div className="stat-label">Finished Projects</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">📚</div>
            <div className="stat-number">30</div>
            <div className="stat-label">Skills Certificates</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">💰</div>
            <div className="stat-number">$15M</div>
            <div className="stat-label">In Order Revenue</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
