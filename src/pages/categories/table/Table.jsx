import React from 'react'
import { Container } from '../../shop/Shop'
import Header from './Header'
import TableProducts from './TableProducts'

const Table = () => {
  return (
    <Container>
      <Header/>
      <TableProducts/>
    </Container>
  )
}

export default Table