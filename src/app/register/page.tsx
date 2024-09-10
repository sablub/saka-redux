"use client"

import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { register } from '@/redux/slices/userSlice';
import Link from 'next/link';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(register({ 
      name,
      email,
      password
    }));
  }

  return (
    <div className="login">
      <form className="login_form" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        <button type="submit" className='submit_button' >Register</button>
      </form>
      <p>
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;