import React from 'react';
import '../styles/HistorySection.css';

const HistorySection = () => {
  return (
    <section className="about-history-section">
      <div className="container">
        <h2>Our History</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">1998 - 1999</div>
            <div className="timeline-content">
              <p>
                NanoSoft began life as the networking division of ChemPorture. ChemPorture is a software
                company that was formed in November 1998 following a management buyout of
                the technology assets from a large US corporate.
              </p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2000 - 2009</div>
            <div className="timeline-content">
              <p>
                NanoSoft launched as an independent business. NanoSoft moved into our New York offices,
                and invested heavily to build a elite team with 15 years of collective technology experience
                overnight to strength.
              </p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2010 - 2017</div>
            <div className="timeline-content">
              <p>
                NanoSoft successfully achieved Cyber Essentials, a growing provider of local Australia IT Support
                and IT services to help local and national businesses.
              </p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-year">2018 - Present</div>
            <div className="timeline-content">
              <p>
                The servers team at NanoSoft made a straight to the top of the Service Desk Institute (SDI)
                Service Desk Award Service Desk Provider (SDP) awards. We are incredibly proud of the
                recognition and this achievement is testament to our success and our Service Desk team's
                incredible hard work and extended period to ensure we consistently meet the needs of our
                customers with IT Service & IT Solution, UK provides IT Services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
