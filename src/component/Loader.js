import React from 'react'
import styled from "styled-components"
import {CircleLoader} from "react-spinners"

const Loader = () => {
  return (
    <Div>
        <CircleLoader 
        color='#db9277'
        size={150} />
    </Div>
  )
}

const Div = styled.div`
height:100vh;
display:flex;
align-items:center;
justify-content:center;

`
export default Loader