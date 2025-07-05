import React, { useState } from 'react';
import '../css/LoginOther.css';
import { useNavigate } from 'react-router-dom';

const LoginOther = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError('Both fields are required.');
      return;
    }

    // Simulated login (replace with actual API call)
    if (formData.username === 'admin' && formData.password === 'admin123') {
      setError('');
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Try again.');
    }
  };

  return (
    <div className="login-other-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login to Another Account</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {error && <div className="error-msg">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginOther;
