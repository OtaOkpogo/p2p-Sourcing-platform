import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    await axios.post('/api/auth/register', { name, email, password });
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="

