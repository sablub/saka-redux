"use client"

import React from 'react'
import './logout.css'
import { useDispatch } from 'react-redux'
import { logout } from '@/redux/slices/userSlice'

const Logout = () => {


  const dispatch = useDispatch()
  const handleLogout = (e: any) => {
    e.preventDefault()

    dispatch(logout())
  }

  return (
    <div className='container' >
      <h1>Welcome <span className='user_name'>user</span> </h1>
      <button className='logout_button' onClick={handleLogout} >Logout</button>
    </div>
  )
}

export default Logout
