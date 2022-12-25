import React from 'react'
import styled from "styled-components"
import {AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {ImCancelCircle} from "react-icons/im"
import Sidebar from './Sidebar'
import CartModal from './CartModal'
import SearchSection from './SearchSection'
import { useState } from 'react'


const IpadNav = ({showSideBar, setShowSideBar, showCart, setShowCart}) => {

 const [showSearch, setShowSearch] = useState(false)
  return (
    <Nav>
        <div className='logo'>Furnical</div>
        <div className='icons'>
            <div className='menu'>
                {!showSideBar && <span onClick={() => setShowSideBar(true)}><AiOutlineMenu /></span> }
               {showSideBar &&  <span onClick={() => setShowSideBar(false)}><ImCancelCircle /></span>}
            </div>
            <div className='icon'  onClick ={() => setShowSearch(true)}><AiOutlineSearch /></div>
            <div className='icon'><CgProfile /></div>
            <div className='icon' onClick={() => setShowCart(true)}><AiOutlineShoppingCart/></div>
        </div>
        {
            showSideBar &&
            <Sidebar 
            showSideBar={showSideBar}
            setShowSideBar={setShowSideBar}
            />
        }
        {
            showCart &&
            <CartModal setShowCart={setShowCart} />
        }
        {
        showSearch &&
        <div className='search'>
            <SearchSection />
            <div 
            className='remove'
            onClick ={() => setShowSearch(false)}
            >
                <ImCancelCircle />
            </div>
        </div>
        }
    </Nav>
  )
}



const Nav = styled.nav`
display:flex;
align-items:center;
justify-content:space-between;

.remove{
    position:absolute;
    top:1em;
    right:1em;
    font-size:1.5rem;
    cursor:pointer;
}
.search{
    position:absolute;
    top:30%;
    left:50%;
    transform:translate(-50%, -50%);
    background:${({theme}) => theme.colors.white};
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    transition: transform 6s ease,-webkit-transform 4s ease;
}

.logo{
    color:${({theme}) => theme.colors.primary};
    font-weight:bold;
    font-size:1.5rem;
    cursor:pointer;
}
.icons{
display:flex;
align-items:center;
column-gap:2rem;
font-size:1.5rem;
}

.menu{
    background:${({theme}) => theme.colors.primary};
    padding:${({theme}) => theme.padding.sm};
    color:${({theme}) => theme.colors.white};
    height:25px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer
}

.icon{
    height:25px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:${({theme}) => theme.padding.sm};
    cursor:pointer;
    :hover{
        background:${({theme}) => theme.colors.lightPrimary};
    }
}
`
export default IpadNav