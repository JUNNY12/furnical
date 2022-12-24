import React from 'react'
import styled from "styled-components"

const Footer = () => {
  return (
    <Container>

    </Container>
  )
}

const Container = styled.footer`
background:${({theme}) => theme.colors.primary};
padding:${({theme}) => theme.padding.lg};

`

export default Footer