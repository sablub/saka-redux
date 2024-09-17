"use client"

import React, { useEffect } from 'react'
import './logout.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUserStatus } from '@/redux/slices/userSlice'
import { useRouter } from 'next/navigation'

const Logout = () => {

  const status = useSelector(selectUserStatus);
  const router = useRouter()

  const dispatch = useDispatch()
  const handleLogout = (e: any) => {
    e.preventDefault()

    dispatch(logout())
  }

  const users = useSelector((state: any) => state.user.users); 

  useEffect(() => {
    if(status === 'loggedOut'){
      router.push('/login')
    }
  }, [status, users])

  return (
    <div className='container' >
      <h1>Welcome <span className='user_name'>user</span> </h1>
      <button className='logout_button' onClick={handleLogout} >Logout</button>
      {users.length > 0 ? (
        <ul>
          {users.map((user: any, index: number) => (
            <li key={index}>
              <strong>Name:</strong> {user.name} <br />
              <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No registered users yet.</p>
      )}
    </div>
  )
}

export default Logout
