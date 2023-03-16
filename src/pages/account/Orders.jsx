import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import { devices } from '../../config/mediaquery'

const Orders = () => {
  return (
    <Container>
      <h3 >No order has been made yet</h3>
      <Link to='/shop'>
        <button className='browse'>Browse Products</button>
      </Link>
    </Container>
  )
}

const Container = styled.div`
@media ${devices.tablet} {
  margin-bottom:3rem;
}

.browse{
  outline:none;
  border:1px solid ${({theme})=> theme.colors.primary};
  padding:0.5rem;
  font-weight:500;
  border-radius:2px;
  background: ${({theme})=> theme.colors.white};
  cursor:pointer;
}
h3{
  text-align:center;
  font-size:1.5rem;
  font-weight:550;
}
`

export default Orders