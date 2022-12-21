import React from 'react'
import styled from "styled-components"
import { Input } from './Input'

const SearchSection = () => {
  return (
    <Section>
        <div className='flex'>
           <div>
                <select>
                    <option>Choose a Category</option>
                    <option>Chair</option>
                    <option>Table</option>
                    <option>Cottons</option>
                </select>
           </div>
           <div>
               <Search
               type='search'
               placeholder='Enter your search'
               name='search'
               />
           </div>

        </div>

    </Section>
  )
}


const Section = styled.section`
margin:${({theme}) => theme.margin.lg};
padding:${({theme}) => theme.padding.lg};

.flex{
    display:flex;
    align-items:center;
    justify-content:center;
}

select{
    width:200px;
    height:40px;
    outline:none;
}

`

const Search = styled(Input)`
text-indent:10px;
width:400px;
height:40px;
`

export default SearchSection