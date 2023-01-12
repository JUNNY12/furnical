import React from 'react'
import styled from "styled-components"
import { SharedLayout } from '../../component'
import EmptyCart from './EmptyCart'
import Header from './Header'
import Items from './Items'
import { devices } from '../../config/mediaquery'
import Subtotal from './Subtotal'


const Cart = () => {
  return (
   <SharedLayout>
     <Section>
       <Header />
     </Section>
     <EmptyCart />
     <Items />
     <Subtotal/>
   </SharedLayout>
  )
}


const Section = styled.section`
padding:${({theme}) => theme.padding.lg};
margin:0 ${({theme}) => theme.margin.lg} 0 ${({theme}) => theme.margin.lg} ;

`

export default Cart