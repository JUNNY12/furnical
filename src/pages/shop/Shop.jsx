import React from 'react'
import styled from "styled-components"
import { SharedLayout } from '../../component'
import Header from "./Header"
import { devices } from '../../config/mediaquery'
import ProductDisplay from './ProductDisplay'

const Shop = () => {
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
margin-bottom:2rem;
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