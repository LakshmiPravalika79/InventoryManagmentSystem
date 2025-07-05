import React, { useState } from 'react';
import '../css/EditProfile.css';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: 'Alex Doe',
    email: 'alex@example.com',
    password: '',
    avatar: null
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'avatar') {
      const file = files[0];
      setFormData({ ...formData, avatar: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
    console.log('Updated Data:', formData);
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit} className="edit-profile-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Upload Avatar</label>
          <input type="file" name="avatar" accept="image/*" onChange={handleChange} />
        </div>

        {preview && (
          <div className="avatar-preview">
            <img src={preview} alt="Avatar Preview" />
          </div>
        )}

        <button type="submit" className="save-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
