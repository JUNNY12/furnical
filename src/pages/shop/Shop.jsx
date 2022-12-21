import React from 'react'
import styled from "styled-components"
import { SharedLayout } from '../../component'
import Header from "./Header"
import Products from './Products'

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
`

const Section = styled.section`
margin:${({theme}) => theme.margin.lg};
padding:${({theme}) => theme.padding.lg};
`
export default Shop