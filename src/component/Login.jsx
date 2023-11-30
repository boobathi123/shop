import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });

      if (response.data.message === 'Login successful!') {
        // Handle successful login here, e.g., redirect to a dashboard page
        console.log('Login successful!');
      } else {
        setError('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Failed to log in. Please try again later.');
    }
  };

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='40-2 p-5 rounded bg-white'>
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>
          {error && <div className='alert alert-danger'>{error}</div>}
          <div className='mb-2'>
            <label htmlFor='Email'>Email</label>
            <input
              type='email'
              placeholder='Enter your email'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              placeholder='Enter password'
              className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <input type='checkbox' className='custom-control custom-checkbox' id='check' />
            <label htmlFor='check' className='custom-input-label'>
              Remember me
            </label>
          </div>
          <div className='d-grid'>
            <button type='submit' className='btn btn-primary'>
              Sign in
            </button>
          </div>
          <p className='text-right'>
            Forgot Password?<NavLink to='/signup'>Signup</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
