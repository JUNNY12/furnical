import React from 'react'
import styled from "styled-components"
import { SharedLayout } from '../../component'
import Header from "./Header"
import Products from './Products'
import { devices } from '../../config/mediaquery'
import ListProduct from './ListProduct'
import Sort from './Sort'
import { useState } from 'react'
import useWidth from '../../hooks/useWidth'
import ProductDisplay from './ProductDisplay'

const Shop = () => {
  const [list , setList] = useState(false)
  const width = useWidth()
  return (
    <SharedLayout>

      <Section>
        <Header />
      </Section>
      <Container>
        <ProductDisplay />        
      </Container>

    </SharedLayout>
  )
}

export const Container= styled.div`
background:${({theme}) => theme.colors.white};
padding:${({theme}) => theme.padding.lg};
padding-bottom:4rem;
@media all and ${devices.laptop}{
  padding:${({theme}) => theme.padding.md};

@media all and (max-width:550px){
  padding:0.6rem;
}
`

const Section = styled.section`
padding:${({theme}) => theme.padding.lg};
`
export default Shop