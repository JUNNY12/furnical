import React from 'react'
import styled from "styled-components"
import {AiOutlineMenu, AiOutlineShoppingCart} from "react-icons/ai"
import { Input } from './Input'
import { devices } from '../config/mediaquery'
import {ImCancelCircle} from "react-icons/im"
import Sidebar from './Sidebar'


const MobileNav = ({showSideBar, setShowSideBar}) => {
  return (
      <>
      {showSideBar && <Sidebar />}
        <Nav>
           
             <div className='cartIcon'>
                <AiOutlineShoppingCart />
            </div>
            {
                !showSideBar &&  
            <div>
                <Search
                placeholder="I'm Searching for ..."
                type='search'
                />
            </div>
            }

           
           {
               !showSideBar && 
               <div 
               className='menuIcon'
               onClick={() => setShowSideBar(true)}>
                    <AiOutlineMenu />
               </div>
           }
           {
               showSideBar &&
               <div 
               className='menuIcon'
               onClick ={() => setShowSideBar(false)}>
                     <ImCancelCircle />
               </div>
           }
        </Nav>
        </>
  )

}

const Nav = styled.nav`
display:none;
justify-content:space-between;
align-items:center;
@media all and ${devices.tablet}{
    display:flex;
}

.cartIcon,
.menuIcon
{
    font-size:1.5rem;
    cursor:pointer;
}
`


const Search = styled(Input)`
width:250px;
height:30px;
text-indent:10px;
@media all and ${devices.mobileL}{
    width:200px ;
}
`

export default MobileNav