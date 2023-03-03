import React from 'react'
import styled from "styled-components"

const Header = () => {
  return (
    <Div>
        <h2>CHECKOUT</h2>
    </Div>
  )
}

const Div = styled.div`
border-bottom:2px solid${({theme}) => theme.colors.primary} ;
margin:2rem;

@media all and (max-width:550px){
  text-align:center;
}
`

export default Header