import React from 'react'
import { Outlet } from 'react-router-dom'
import { SharedLayout } from '../../component'
import styled from "styled-components"
import { NavLink } from 'react-router-dom'
import { devices } from '../../config/mediaquery'

const AccountLayout = () => {
  return (
    <SharedLayout>
       <div>
           <H1 >My Account</H1>
            <Container>
                    <div className='side'>
                        <NavLink to={`dashboard`} className={({isActive}) => isActive? 'activeLink' : undefined} end>
                            <div className='sideLink'>Dashboard</div>
                        </NavLink>
                        <NavLink to={`details`} className={({isActive}) => isActive? 'activeLink' : undefined} end>
                            <div className='sideLink'>Account Details</div>
                        </NavLink>
                    <NavLink to={`address`} className={({isActive}) => isActive? 'activeLink' : undefined} end>
                        <div className='sideLink'>Address</div>
                    </NavLink>
                    <NavLink to={`orders`} className={({isActive}) => isActive? 'activeLink' : undefined} end>
                        <div className='sideLink'>Orders</div>
                    </NavLink>
                        <div className='sideLink'>Logout</div>
                    </div>

                    <Outlet />
            </Container>
       </div>
       
    </SharedLayout>
  )
}

const Container = styled.div`
display:flex;
column-gap:5rem;
padding:${({theme}) => theme.padding.lg};
background:${({theme}) => theme.colors.white};
@media all and ${devices.tablet}{
    flex-direction:column;
}

.side{
    width:25%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    @media all and ${devices.tablet}{
        width:100%;
    }
}
a{
    text-decoration:none;
    color:black;
  
}

.activeLink{
color:${({theme}) => theme.colors.primary};
}
.sideLink{
    border:1.5px solid gray;
    width:11rem;
    padding:${({theme}) => theme.padding.md};
    font-weight:550;
    @media all and ${devices.tablet}{
        width:15rem;
    }
}
`

const H1 = styled.h1`
margin-left:1rem;
@media all and ${devices.tablet}{
    text-align:center;
}
`
export default AccountLayout