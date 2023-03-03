import React from 'react'
import styled from "styled-components"
import { devices } from '../../config/mediaquery'

const Sort = ({handleSort}) => {

  return (
    <Section>
       <div>
       <select id="sort" onChange={handleSort}>
        <option value="name">name</option>
        <option value="rating">Average Rating</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
        <option value="popularity">Popularity</option>
        <option value="purchased">Purchased</option>
      </select>
       </div>
    </Section>
  )
}

const Section = styled.section`
display:flex;
justify-content:space-between;
align-items:center;
padding:0 ${({theme}) => theme.margin.lg}  0 ${({theme}) => theme.margin.lg};

.disabled{
  color:gray;
}
span{
  margin-right:2rem;
  font-size:1.3rem;
  cursor:pointer;
  @media all and ${devices.mobileM}{
    margin-right:1rem;
    font-size:1rem;
  }
}

select{
  outline:none;
  border:1.5px solid gray;
  height:40px;
  padding:${({theme}) => theme.padding.sm};
}
`

export default Sort