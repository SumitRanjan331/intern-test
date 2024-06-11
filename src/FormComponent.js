import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (!email) {
      setError('Email is required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email address');
      return;
    }

    try {
      const response = await axios.post('http://34.225.132.160:8002/api', { email });
      if (response.status === 200) {
        setSuccess('Form Submitted');
        setEmail('');
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setError('Email ending with @ez.works is not allowed');
      } else {
        setError('An error occurred while submitting the form');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='searchbar'>
      <input
        id="email"
        type="email"
        value={email}
        placeholder="Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}
      <button type="submit">Contact Me</button>
      </div>
    </form>
  );
};

export default FormComponent;
