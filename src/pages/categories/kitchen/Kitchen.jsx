import React from 'react'
import { Container } from '../../shop/Shop'
import Header from "./Header"
import KitchenProducts from './KitchenProducts'

const Kitchen = () => {
  return (
    <Container>
      <Header/>
      <KitchenProducts />
    </Container>
  )
}

export default Kitchen