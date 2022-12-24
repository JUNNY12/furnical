import React from 'react'
import styled from "styled-components"
import {IoMdArrowBack} from "react-icons/io"


const EmptyCart = () => {
  return (
    <Container>
        <div className='empty'>
            Your Cart is currently empty.
        </div>
        <button className='return'>
            <span><IoMdArrowBack /></span>
            <span className='rt'>Return Back To Shop</span>
        </button>
    </Container>
  )
}

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:6rem;
background:${({theme}) => theme.colors.white};
padding:${({theme}) => theme.padding.lg};

.rt{
    margin-left:0.5rem;
}
.empty{
    font-size:1.3rem;
}
.return{
border:none;
outline:none;
padding:${({theme}) => theme.padding.sm};
background:${({theme}) => theme.colors.primary};
color:${({theme}) => theme.colors.white};
font-weight:bold;
cursor:pointer;
}
`

export default EmptyCart