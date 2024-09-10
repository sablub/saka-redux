"use client"

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './login.css'
import Link from 'next/link';
import { login, selectUserStatus } from '@/redux/slices/userSlice';

const page = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(login({ 
      email: email,
      password: password,
      loggedInUser: true
    }))
  }

  return (
    <div className="login">
      <form action="" className='login_form' onSubmit={(e) => handleSubmit(e)} >
        <h1>Login Form</h1>
        <input type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} placeholder='email' ></input>
        <input type="password" value={password} onChange={(e: any) => setPassword(e.target.value)} placeholder='password' ></input>
        <button type='submit' className='submit_button' ><Link href='logout'>Submit</Link></button>
      </form>
    </div>
  )
}

export default page
