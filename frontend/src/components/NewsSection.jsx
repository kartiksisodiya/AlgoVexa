import React from 'react';
import '../styles/NewsSection.css';

const NewsSection = () => {
  return (
    <section className="about-news-section">
      <div className="container">
        <h2>What's going on at NanoSoft Solutions?</h2>
        <div className="news-grid">
          <div className="news-item">
            <div className="news-image">
              <img src="https://via.placeholder.com/200x120/4285f4/ffffff?text=Security+Tips" alt="Security Tips" />
              <div className="news-date">05 Jul</div>
            </div>
            <h3>Tips to make your workforce more security aware</h3>
            <p>This Lorem ipsum...</p>
          </div>
          
          <div className="news-item">
            <div className="news-image">
              <img src="https://via.placeholder.com/200x120/4285f4/ffffff?text=Computer+Protection" alt="Computer Protection" />
              <div className="news-date">24 Jun</div>
            </div>
            <h3>4 ways cybercrime affects small businesses their computers</h3>
            <p>This Lorem ipsum...</p>
          </div>
        </div>
        
        <div className="news-navigation">
          <button className="nav-btn">←</button>
          <button className="nav-btn active">•</button>
          <button className="nav-btn">•</button>
          <button className="nav-btn">→</button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
