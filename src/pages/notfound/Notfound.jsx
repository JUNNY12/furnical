import React from 'react'
import styled from "styled-components"
import { SharedLayout } from '../../component'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <SharedLayout>
      <Container>
        <p>This page does not exist</p>
        <Link to={'/'}>
          <button>Back To Home</button>
        </Link>
    </Container>
    </SharedLayout>
  )
}


const Container = styled.section`
display:flex;
justify-content:center;
align-items:center;
padding:2rem;
margin:2rem;
flex-direction:column;

p{
  font-size:2rem;
}

button{
  border:none;
  outline:none;
  background-color:${({theme}) => theme.colors.primary};
  padding:1rem;
  color:white;
  cursor:pointer;
  font-weight:bold;
  }
  button:hover{
    background:white;
    color:${({theme}) => theme.colors.primary};
    border:1.5px solid ${({theme}) => theme.colors.primary};
    transition:.3s linear;
  }
`
export default Notfound