import React, { useState } from 'react';
import './CustomerLogin.css';

const CustomerLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    aadhar: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Customer Login Data:', formData);
  };

  return (
    <form className="customer-form" onSubmit={handleSubmit}>
      <h2>Customer Login</h2>
      <input name="username" type="text" placeholder="Username" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="phone" type="tel" placeholder="Phone Number" onChange={handleChange} required />
      <input name="aadhar" type="text" placeholder="Aadhar Card Number" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default CustomerLogin;
