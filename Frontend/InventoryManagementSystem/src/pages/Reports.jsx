import React from 'react';
import '../css/Reports.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const reportData = [
  { month: 'Jan', revenue: 500000, profit: 120000 },
  { month: 'Feb', revenue: 600000, profit: 135000 },
  { month: 'Mar', revenue: 700000, profit: 160000 },
  { month: 'Apr', revenue: 800000, profit: 180000 },
  { month: 'May', revenue: 900000, profit: 200000 },
];

const Reports = () => {
  const handleExport = () => {
    // Placeholder for export functionality
    alert('Report exported as PDF!');
  };

  return (
    <div className="reports-page">
      <h1>Monthly Reports</h1>

      <div className="report-summary">
        <div className="report-card">
          <h3>Total Revenue</h3>
          <p>₹3,500,000</p>
        </div>
        <div className="report-card">
          <h3>Total Profit</h3>
          <p>₹795,000</p>
        </div>
        <div className="report-card">
          <h3>Total Orders</h3>
          <p>146</p>
        </div>
        <div className="report-card">
          <h3>Top Month</h3>
          <p>May (₹900,000)</p>
        </div>
      </div>

      <div className="report-chart">
        <h2>Revenue & Profit Trend</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={reportData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#007bff" />
            <Line type="monotone" dataKey="profit" stroke="#28a745" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="export-btn-container">
        <button onClick={handleExport}>📄 Export as PDF</button>
      </div>
    </div>
  );
};

export default Reports;
