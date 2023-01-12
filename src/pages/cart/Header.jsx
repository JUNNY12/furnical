import React from 'react'
import styled from "styled-components"

const Header = () => {
  return (
    <Div>Cart</Div>
  )
}

const Div = styled.h2`
padding-bottom:0.5rem;
font-weight:600;
border-bottom:2px solid${({theme}) => theme.colors.primary} ;
`
export default Header