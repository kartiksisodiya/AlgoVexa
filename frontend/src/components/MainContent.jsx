import React from 'react';
import '../styles/MainContent.css';

const MainContent = () => {
  return (
    <section className="about-content-section">
      <div className="container">
        <div className="content-grid">
          <div className="image-grid">
            <div className="image-item large">
              <img src="https://via.placeholder.com/300x300/4285f4/ffffff?text=Team+Collaboration" alt="Team collaboration" />
            </div>
            <div className="image-column">
              <div className="image-item">
                <img src="https://via.placeholder.com/250x140/4285f4/ffffff?text=Business+Meeting" alt="Business meeting" />
              </div>
              <div className="image-item">
                <img src="https://via.placeholder.com/250x140/4285f4/ffffff?text=Professional+Team" alt="Professional team" />
              </div>
            </div>
          </div>
          
          <div className="content-text">
            <h2>Technology solutions to help businesses and societies flourish</h2>
            <p>
              NanoSoft is a privately owned IT Support and IT Services business formed in 1999. Today we're proud
              to have a strong team of IT engineers who thrive on rolling up their sleeves and solving your IT
              problems and meeting your business needs. We are a Managed Service Provider who excels at reduced
              time helping your business to be more efficiently working to improve your operations.
            </p>
            <button className="download-btn">
              📄 Download Our Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
