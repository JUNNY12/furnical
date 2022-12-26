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

const Shop = () => {
  const [list , setList] = useState(false)
  const width = useWidth()
  return (
    <SharedLayout>

      <Section>
        <Header />
      </Section>
      <Container>
        <Sort 
        list={list}
        setList={setList}
        />
        {
          !list && 
          <Products />
        }
        {
          width >= 990 ?
          list && 
          <ListProduct />
          : <Products />
        }
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
padding:${({theme}) => theme.padding.lg};
`
export default Shop