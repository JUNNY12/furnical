import React from 'react'
import styled from "styled-components"
import { SharedLayout } from '../../component'
import Header from "./Header"
import Products from './Products'
import { devices } from '../../config/mediaquery'

const Shop = () => {
  return (
    <SharedLayout>

      <Section>
        <Header />
      </Section>
      <Container>
        <Products />
      </Container>

    </SharedLayout>
  )
}

const Container= styled.div`
background:${({theme}) => theme.colors.white};
padding:${({theme}) => theme.padding.lg};
@media all and ${devices.laptop}{
  padding:${({theme}) => theme.padding.md};

@media all and (max-width:550px){
  padding:0.6rem;
}
`

const Section = styled.section`
margin:${({theme}) => theme.margin.lg};
padding:${({theme}) => theme.padding.lg};
`
export default Shop