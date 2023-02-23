import React from 'react'
import styled from "styled-components"

const Header = () => {
  return (
    <Div>SHOP</Div>
  )
}

export const Div = styled.h2`
font-weight:600;
padding-bottom:0.5rem;
border-bottom:2px solid${({theme}) => theme.colors.primary} ;
`
export default Header