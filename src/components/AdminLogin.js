import React, { useState } from 'react';
import './AdminLogin.css'; // Import your CSS

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admin Login Data:', formData);
    // You can add login logic or backend call here
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <h2>Admin Login</h2>
      <input
        name="username"
        type="text"
        placeholder="Admin Username"
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default AdminLogin;
