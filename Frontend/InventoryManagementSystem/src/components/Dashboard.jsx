import React from 'react';
import '../css/Dashboard.css';
import { Link } from 'react-router-dom';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const RevenueDashboard = () => {
  const data = [
    { month: 'Jan', revenue: 500000 },
    { month: 'Feb', revenue: 600000 },
    { month: 'Mar', revenue: 700000 },
    { month: 'Apr', revenue: 800000 },
    { month: 'May', revenue: 900000 },
    { month: 'Jun', revenue: 950000 },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar - Fixed */}
      <div className="sidebar">
        <div className="logo">📊 Store</div>

        <div className="menu">
          <div className="menu-item">
            <Link to="/" className="menu-link"><i>🏠</i> Home</Link>
          </div>
          <div className="menu-item">
            <Link to="/edit-profile" className="menu-link"><i>✏️</i> Edit Profile</Link>
          </div>
          <div className="menu-item active">
            <Link to="/revenue-dashboard" className="menu-link"><i>💰</i> Revenue</Link>
          </div>
          <div className="menu-item">
            <Link to="/inventory" className="menu-link"><i>📦</i> Inventory</Link>
          </div>
          <div className="menu-item">
            <Link to="/suppliers" className="menu-link"><i>👥</i> Suppliers</Link>
          </div>
          <div className="menu-item">
            <Link to="/orders" className="menu-link"><i>🛒</i> Orders</Link>
          </div>
          <div className="menu-item">
            <Link to="/reports" className="menu-link"><i>📊</i> Reports</Link>
          </div>
          <div className="menu-item">
            <Link to="/login-others" className="menu-link"><i>🔑</i> Login Other account</Link>
          </div>
        </div>

        <div className="user-profile">
          <div className="avatar">A</div>
          
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="main-content">
        <div className="header">
          <div className="page-title">Total Revenue Expected</div>
          <button className="logout-btn">
            <i>↩️</i> Logout
          </button>
        </div>

        {/* Stats Section */}
        <div className="stats-container">
          {[
            { title: 'Total Brought Price of All Products:', value: '₹2525000' },
            { title: 'Total Selling Price of All Products:', value: '₹3850000' },
            { title: 'Total Expected Profit:', value: '₹1325000' },
          ].map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-title">{stat.title}</div>
              <div className="stat-value">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Current Sales Revenue */}
        <div className="revenue-section">
          <div className="section-header">Current Sales Revenue</div>
          <div className="revenue-metrics">
            {[
              { title: 'Total Sales Revenue Made (GST Excluded):', value: '₹1950000.00' },
              { title: 'Total Sales Revenue Made (GST Included):', value: '₹2301000.0000' },
              { title: 'GST Amount:', value: '₹351000.0000' },
              { title: 'Total Profit (From Orders):', value: '+ ₹675000.00', positive: true },
            ].map((metric, index) => (
              <div key={index} className="metric-box">
                <div className="metric-title">{metric.title}</div>
                <div className={`metric-value ${metric.positive ? 'positive' : ''}`}>{metric.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Analytics Section */}
        <div className="analytics-section">
          <div className="chart-container">
            <div className="chart-title">Revenue Trends</div>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="top-products">
            <div className="chart-title">Top Selling Products</div>
            <ul className="product-list">
              {[
                { name: 'iPhone 14 Pro', sales: '₹595,000' },
                { name: 'Dell XPS 13', sales: '₹425,000' },
                { name: 'Samsung TV 55"', sales: '₹348,000' },
                { name: 'Sony Headphones', sales: '₹247,500' },
                { name: 'Office Chair', sales: '₹156,000' },
              ].map((product, index) => (
                <li key={index} className="product-item">
                  <div className="product-name">{product.name}</div>
                  <div className="product-sales">{product.sales}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Inventory Status Section */}
        <div className="revenue-section">
          <div className="section-header">Inventory Status</div>
          <div className="revenue-metrics">
            {[
              { title: 'Total Items', value: '1,253' },
              { title: 'Low Stock Items', value: '48' },
              { title: 'Out of Stock', value: '17' },
              { title: 'Orders Pending', value: '23' },
            ].map((metric, index) => (
              <div key={index} className="metric-box">
                <div className="metric-title">{metric.title}</div>
                <div className="metric-value">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueDashboard;
