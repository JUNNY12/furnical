import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = ({}) => {
  // if(userAuth){
  //   return <Navigate to ={`/`} />
  // }
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Auth