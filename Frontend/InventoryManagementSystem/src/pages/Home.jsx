import React, { useState } from 'react';
import '../css/Dashboard.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`dashboard-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">📊 Store</div>
        <div className="menu">
          <div className="menu-item active" onClick={() => navigate('/home')}>
            <i>🏠</i> Home
          </div>
          <div className="menu-item" onClick={() => navigate('/edit-profile')}>
            <i>✏️</i> Edit Profile
          </div>
          <div className="menu-item" onClick={() => navigate('/revenue')}>
            <i>💰</i> Revenue
          </div>
          <div className="menu-item" onClick={() => navigate('/inventory')}>
            <i>📦</i> Inventory
          </div>
          <div className="menu-item" onClick={() => navigate('/suppliers')}>
            <i>👥</i> Suppliers
          </div>
          <div className="menu-item" onClick={() => navigate('/orders')}>
            <i>🛒</i> Orders
          </div>
          <div className="menu-item" onClick={() => navigate('/reports')}>
            <i>📊</i> Reports
          </div>
          <div className="menu-item" onClick={() => navigate('/login-other')}>
            <i>🔑</i> Login Other Account
          </div>
        </div>

        <div className="user-profile">
          <div className="avatar">A</div>
        </div>

        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? 'Close' : 'Open'} Sidebar
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <div className="page-title">Home</div>
          <button className="logout-btn" onClick={() => navigate('/')}>
            <i>↩</i> Logout
          </button>
        </div>

        <div style={{ marginTop: '40px', fontSize: '24px', fontWeight: 'bold' }}>
          Welcome to <span style={{ color: '#1976d2' }}>Inventory Pro</span> – Inventory made easy!
        </div>
      </div>
    </div>
  );
}
