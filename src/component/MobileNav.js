import React from 'react'
import styled from "styled-components"
import {AiOutlineMenu, AiOutlineShoppingCart} from "react-icons/ai"
import { Input } from './Input'
import { devices } from '../config/mediaquery'
import {ImCancelCircle} from "react-icons/im"
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'


const MobileNav = ({showSideBar, setShowSideBar}) => {
    const cart = useSelector((state) => state.cart) 
    const {cartItems} = cart
   
  return (
      <>
      {showSideBar && <Sidebar />}
        <Nav>
           
             <div className='cartIcon'>
                <AiOutlineShoppingCart />
                {
                    cartItems.length > 0 &&
                    <span className='dot'></span>
                }
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

.dot{
    height:0.5em;
    position:absolute;
    top:0em;
    right:-0.5em;
    width:0.5em;
    border-radius:50%;
    background:${({theme}) => theme.colors.primary};

}
.cartIcon,
.menuIcon
{
    font-size:1.5rem;
    cursor:pointer;
    position:relative;
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