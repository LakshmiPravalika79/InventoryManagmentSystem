import React from 'react';
import './Features.css';

function Features() {
  return (
    <div className="features-container">
      <h1>Features</h1>
      <p className="subtitle">Explore the powerful features that make our platform reliable for modern businesses.</p>
      <div className="feature-list">
        <div className="feature-item">
          <h2>📊 Real-Time Dashboard</h2>
          <p>Visualize your revenue and business data in real-time with interactive charts and analytics.</p>
        </div>
        <div className="feature-item">
          <h2>📄 Custom Reports</h2>
          <p>Generate detailed reports tailored to your needs. Export to PDF or Excel instantly.</p>
        </div>
        <div className="feature-item">
          <h2>👥 User Management</h2>
          <p>Easily manage team access, roles, and permissions with our built-in user controls.</p>
        </div>
        <div className="feature-item">
          <h2>🔒 Secure & Scalable</h2>
          <p>Built with modern security and scalable infrastructure to grow with your business.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
