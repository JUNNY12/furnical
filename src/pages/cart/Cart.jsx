import React from 'react'
import styled from "styled-components"
import { SharedLayout } from '../../component'
import EmptyCart from './EmptyCart'
import Header from './Header'
import Items from './Items'
import { devices } from '../../config/mediaquery'
import Subtotal from './Subtotal'
import { useSelector } from 'react-redux'


const Cart = () => {

  const {cartItems} = useSelector((state) => state.cart)
  return (
   <SharedLayout>
     <Section>
       <Header />
     </Section>
     {
      cartItems.length === 0 && <EmptyCart />
     }
    {
      cartItems.length > 0 && <Items />
    }
     <Subtotal/>
   </SharedLayout>
  )
}


const Section = styled.section`
margin:0 ${({theme}) => theme.margin.lg} 0 ${({theme}) => theme.margin.lg} ;

`

export default Cart