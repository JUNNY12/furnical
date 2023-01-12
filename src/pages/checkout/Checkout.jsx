import React from 'react'
import { SharedLayout } from '../../component'
import Header from './Header'
import styled from "styled-components"
import Billing from './Billing'
import Order from './Order'

const Checkout = () => {
  return (
    <SharedLayout>
        <Header />
        <Wrapper>
            <Billing />
            <Order />
        </Wrapper>
    </SharedLayout>
  )
}


const Wrapper = styled.section`
background:white;
padding:2rem;
display:grid;
gap:2rem;
grid-template-columns:1fr 1fr;

@media all and (max-width:920px){
    grid-template-columns:1fr;  
}
`
export default Checkout