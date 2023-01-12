import React from 'react'
import styled from "styled-components"
import { devices } from '../../config/mediaquery'

const Header = () => {
  return (
    <Div>MY WISHLIST</Div>
  )
}

const Div = styled.h2`
font-weight:600;
padding-bottom:0.5rem;
border-bottom:2px solid${({theme}) => theme.colors.primary} ;

`
export default Header