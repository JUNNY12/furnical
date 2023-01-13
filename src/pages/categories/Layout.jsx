import React from 'react'
import { Outlet } from 'react-router-dom'
import { SharedLayout } from '../../component'

const Layout = () => {
  return (
   <SharedLayout>
       <Outlet />
   </SharedLayout>
  )
}

export default Layout