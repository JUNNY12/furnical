import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
  
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Auth