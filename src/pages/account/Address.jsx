import React from 'react'
import styled from "styled-components"
import {AiFillEdit} from "react-icons/ai"
import { Link } from 'react-router-dom'
import { devices } from '../../config/mediaquery'


const Address = () => {
  return (
    <Container>
      <h1>My Addresses</h1>
      <p>The following addresses will be used on the checkout page by default.</p>

      <div className='wrapper'>
        <div className='col'>
          <div className='flexAddress'>
            <div className='header'>Billing Address</div>
            <div>
              <Link to={`edit-billing`}>
                <span><AiFillEdit /></span>
                <span>Edit</span>
              </Link>
            </div>
          </div>
          <p>You have not set up this type of address yet.</p>
        </div>

        <div className='col'>
          <div className='flexAddress'>
            <div className='header'>Shipping Address</div>
            <div>
              <Link to={`edit-shipping`}>
                <span><AiFillEdit /></span>
                <span>Edit</span>
              </Link>
            </div>
          </div>
          <p>You have not set up this type of address yet.</p>
        </div>

      </div>
    </Container>
  )
}

const Container = styled.div`

@media ${devices.tablet} {
  margin-bottom:3rem;
}

.wrapper{
  display:flex;
  align-items:center;
  column-gap:5rem;
  @media all and (max-width:768px){
    flex-wrap:wrap;
    justify-content:center;
  }
}
.flexAddress{
  display:flex;
  column-gap:3rem;
  align-items:center;
  
}
.header{
  font-size:1.2rem;
}
.col{
  width:50%;
  margin-bottom:1rem;
  @media all and (max-width:768px){
    width:100%;
  }
}
`

export default Address