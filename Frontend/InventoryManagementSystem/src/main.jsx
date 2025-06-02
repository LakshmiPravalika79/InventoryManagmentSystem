import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Projecthomepage from './components/Projecthomepage.jsx'
import RevenueDashboard from './components/Dashboard.jsx'
import Inventory from './pages/Inventory.jsx'
import LoginOther from './pages/LoginOther.jsx';
import Reports from './pages/Reports.jsx'
import Suppliers from './pages/Suppliers.jsx'
import Orders from './pages/Orders.jsx'
import EditProfile from './pages/EditProfile.jsx'
import Contact from './pages/Contact.jsx';
import Features from './pages/Features.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Homepage Route */}
        <Route path='/' element={<Projecthomepage />} />

        {/* Revenue Dashboard Route */}
        <Route path="/revenue-dashboard" element={<RevenueDashboard />} />

        {/* Additional Routes */}
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/login-others" element={<LoginOther />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
