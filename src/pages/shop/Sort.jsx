import React from 'react'
import styled from "styled-components"
import {CiBoxList} from "react-icons/ci"
import {BsFillGrid3X3GapFill} from "react-icons/bs"
import { devices } from '../../config/mediaquery'
import useWidth from '../../hooks/useWidth'

const Sort = ({list, setList}) => {
  const width = useWidth()
  return (
    <Section>
      <div>
        <span onClick={() => setList(false)}><BsFillGrid3X3GapFill /></span>
       {
         width>= 990 
         &&
         <span onClick={() => setList(true)}><CiBoxList /></span>
       }
      </div>
       <div>
        <select>
              <option>sort by latest</option>
              <option>sort by average rating</option>
              <option>sort price: low to high</option>
              <option>sort price: high to low</option>
              <option>sort by popularity</option>
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