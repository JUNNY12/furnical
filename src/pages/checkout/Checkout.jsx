import React from 'react'
import { SharedLayout } from '../../component'
import Header from './Header'
import styled from "styled-components"
import Order from './Order'

const Checkout = () => {
  return (
    <SharedLayout>
        <Header />
        <Wrapper>
            <Order />
        </Wrapper>
    </SharedLayout>
  )
}


const Wrapper = styled.section`
background:white;
padding:2rem;

@media all and (max-width:920px){
    grid-template-columns:1fr;  
}
`
export default Checkout