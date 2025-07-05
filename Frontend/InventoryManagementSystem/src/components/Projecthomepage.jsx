import React, { Component } from 'react';
import '../css/Projecthomepage.css';
import { Link } from 'react-router-dom';
import RevenueDashboard from './Dashboard.jsx';
import { authApi } from '../api.js';

export class Projecthomepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      isSignIn: true,
      formData: {
        fullname: '',
        email: '',
        role: '',
        password: '',
        confirmPassword: '',
        phonenum: ''
      },
      errors: {}
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      },
      errors: {
        ...prevState.errors,
        [name]: ''
      }
    }));
  }

  validateForm = () => {
    const { formData } = this.state;
    const errors = {};

    if (!formData.fullname) errors.fullname = 'Full name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.role) errors.role = 'Role is required';
    if (!formData.password) errors.password = 'Password is required';
    if (!formData.phonenum) errors.phonenum = 'Phone number is required';
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  }

  showSignIn = () => {
    this.setState({
      isSignIn: true,
      formData: {
        fullname: '',
        email: '',
        role: '',
        password: '',
        confirmPassword: '',
        phonenum: ''
      },
      errors: {}
    });
  }

  showSignup = () => {
    this.setState({ isSignIn: false });
  }

  handlePopupClose = (event) => {
    if (event.target.className === 'popup-overlay') {
      this.setState({ showPopup: false });
    }
  }

  openPopup = () => {
    this.setState({ showPopup: true });
  }

  // In your handleSignIn method:
  handleSignIn = async (e) => {
    e.preventDefault();
    const { email, password, role } = this.state.formData;

    if (!email || !password || !role) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const data = {
        email: email.trim(),
        password,
        role: role.toString()
      };
      console.log('Sending login data:', data);

      // Call your login API (assuming authApi.signIn exists)
      const response = await authApi.signIn(data);


      window.location.href = '/revenue-dashboard';  // 👈 Change history.push to navigate
    } catch (error) {
      console.error('Login error:', error);
      alert(error.message || 'Login failed');
    }
  }



  handleSignUp = async (e) => {
    e.preventDefault();
    const errors = this.validateForm();

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    const { formData } = this.state;
    try {
      console.log('Starting sign up process...');
      const data = {
        fullname: formData.fullname.trim(),
        email: formData.email.trim(),
        role: formData.role.toString(),
        password: formData.password,
        phonenum: formData.phonenum.trim()
      };
      console.log('Sending signup data:', data);

      await authApi.signUp(data);
      alert('Registration successful!');
      this.showSignIn();
    } catch (error) {
      console.error('Registration error:', error);
      alert(error.message || 'Registration failed');
    }
  }
  render() {
    const { showPopup, isSignIn, formData, errors } = this.state;
    return (
      <div className='content'>
        <div className='header'>
          <img className='logo' src='./images/ICONS/logomain.png' alt='logo' />
          <div className='navBar'>
            <Link to="/" className="navBtn home">Home</Link>
            <Link to="/contact" className="navBtn contact">Contact</Link>
            <Link to="/features" className="navBtn features">Features</Link>
            <button className='signIn' onClick={this.openPopup}>Sign In</button>
          </div>
        </div>

        <div className='hero-section'>
          <div className='tagline'>
            <h1 className='H1'>Inventory Management System made easy</h1>
          </div>
          <div className='image-container'>
            <img src="./images/ICONS/image1.png" alt="Stock Management" className='image1' />
          </div>
        </div>

        {showPopup && (
          <div className='popup-overlay' onClick={this.handlePopupClose}>
            <div className='popup-content'>
              <button className='close-btn' onClick={() => this.setState({ showPopup: false })}>×</button>
              <div className='container'>
                {isSignIn ? (
                  <div className='signin-container'>
                    <div className='left-section'>
                      <div className='illustration'>
                        <img src="./images/ICONS/signin.jpg" alt="Sign In Illustration" />
                      </div>
                    </div>
                    <div className='right-section'>
                      <div className='signin-form'>
                        <h2>Welcome to Inventory Pro</h2>
                        <p className='subtitle'>"Your Inventory, Your Way"!</p>
                        <form onSubmit={this.handleSignIn}>
                          <div className='form-group'>
                            <select
                              name="role"
                              className='input-field'
                              value={formData.role}
                              onChange={this.handleChange}
                            >
                              <option value="">Select Role</option>
                              <option value='1'>Customer</option>
                              <option value='2'>Admin</option>
                              <option value='3'>Delivery</option>
                            </select>
                          </div>
                          <div className='form-group'>
                            <input
                              type="email"
                              name="email"
                              className='input-field'
                              placeholder="User Email"
                              value={formData.email}
                              onChange={this.handleChange}
                            />
                          </div>
                          <div className='form-group'>
                            <input
                              type="password"
                              name="password"
                              className='input-field'
                              placeholder="Password"
                              value={formData.password}
                              onChange={this.handleChange}
                            />
                          </div>
                          <div className='remember-me'>
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember Me</label>
                          </div>
                          <button type="submit" className='login-btn'>LOGIN</button>
                          <div className='forgotPassword'>Forgot <label>Password?</label></div>
                          <div className='div2'>
                            Don't have an Account? <span onClick={this.showSignup}>SIGN UP</span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className='signup-container'>
                    <div className='left-section'>
                      <div className='illustration'>
                        <img src="./images/ICONS/signin.jpg" alt="Sign Up Illustration" />
                      </div>
                    </div>
                    <div className='right-section'>
                      <div className='signin-form'>
                        <h2>Welcome to STOCK SAVVY!</h2>
                        <p className='subtitle'>"Your Inventory, Your Way"</p>
                        <form onSubmit={this.handleSignUp}>
                          <div className='form-group'>
                            <select
                              name="role"
                              className='input-field'
                              value={formData.role}
                              onChange={this.handleChange}
                            >
                              <option value="">Select Role</option>
                              <option value='1'>Customer</option>
                              <option value='2'>Supplier</option>
                              <option value='3'>Delivery</option>
                            </select>
                            {errors.role && <span className="error">{errors.role}</span>}
                          </div>
                          <div className='form-group'>
                            <input
                              type="text"
                              name="fullname"
                              className='input-field'
                              placeholder="Full Name"
                              value={formData.fullname}
                              onChange={this.handleChange}
                            />
                            {errors.fullname && <span className="error">{errors.fullname}</span>}
                          </div>
                          <div className='form-group'>
                            <input
                              type="email"
                              name="email"
                              className='input-field'
                              placeholder="User Email"
                              value={formData.email}
                              onChange={this.handleChange}
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                          </div>
                          <div className='form-group'>
                            <input
                              type="password"
                              name="password"
                              className='input-field'
                              placeholder="Password"
                              value={formData.password}
                              onChange={this.handleChange}
                            />
                            {errors.password && <span className="error">{errors.password}</span>}
                          </div>
                          <div className='form-group'>
                            <input
                              type="password"
                              name="confirmPassword"
                              className='input-field'
                              placeholder="Confirm Password"
                              value={formData.confirmPassword}
                              onChange={this.handleChange}
                            />
                            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                          </div>
                          <div className='form-group'>
                            <input
                              type="tel"
                              name="phonenum"
                              className='input-field'
                              placeholder="Phone Number"
                              value={formData.phonenum}
                              onChange={this.handleChange}
                            />
                            {errors.phonenum && <span className="error">{errors.phonenum}</span>}
                          </div>
                          <button type="submit" className='signup-btn'>SIGN UP</button>
                          <div className='div2'>
                            Already a Member? <span onClick={this.showSignIn}>SIGN IN</span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className='footer'>
          <label className='copyrightText'><b>Copyright © SAP. All rights reserved</b></label>
        </div>
      </div>
    );
  }
}

export default Projecthomepage;