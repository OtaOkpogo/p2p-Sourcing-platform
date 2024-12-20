import React, { useState } from 'react';
import { login } from '../api';  // Import the login function

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userData = { email, password };
      const response = await login(userData);  // Call the login function

      // Store the token and redirect on successful login
      console.log('Login successful:', response);
      window.location.href = '/dashboard';  // Redirect to the dashboard

    } catch (err) {
      setError(err.message || 'Failed to login');  // Display error message
      console.error('Login error:', err);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display error */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

