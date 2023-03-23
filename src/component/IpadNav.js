import React from 'react'
import styled from "styled-components"
import {AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {ImCancelCircle} from "react-icons/im"
import Sidebar from './Sidebar'
import CartModal from './CartModal'
import SearchSection from './SearchSection'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const IpadNav = ({showSideBar, setShowSideBar, showCart, setShowCart}) => {
 const [showSearch, setShowSearch] = useState(false)
 const cart = useSelector((state) => state.cart) 
 const {cartItems} = cart


  return (
    <Nav>
        <Link to={`/`}>
            <div className='logo'>
                <span>F</span>
                <span>U</span>
                <span>R</span>
                <span>N</span>
                <span>I</span>
                <span>C</span>
                <span>A</span>
                <span>L</span>
            </div>
        </Link>
        <div className='icons'>
            <div className='menu'>
                {!showSideBar && <span onClick={() => setShowSideBar(true)}><AiOutlineMenu /></span> }
               {showSideBar &&  <span onClick={() => setShowSideBar(false)}><ImCancelCircle /></span>}
            </div>
            <div className='icon'  onClick ={() => setShowSearch(true)}><AiOutlineSearch /></div>
            <div className='icon'><CgProfile /></div>
            <div className='icon' onClick={() => setShowCart(true)}>
                <AiOutlineShoppingCart/>
                {
                    cartItems.length > 0 &&
                    <span className='dot'></span>
                }
            </div>
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

a{
    text-decoration:none;
}
.dot{
    height:0.5em;
    position:absolute;
    top:1.1em;
    right:1em;
    width:0.5em;
    border-radius:50%;
    background:${({theme}) => theme.colors.primary};

}

.remove{
    position:absolute;
    top:1em;
    right:1em;
    font-size:1.5rem;
    cursor:pointer;
}
.search{
    position:absolute;
    top:9.5em;
    left:50%;
    z-index:100;
    transform:translate(-50%, -50%);
    background:${({theme}) => theme.colors.white};
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    transition: transform 6s ease,-webkit-transform 4s ease;
}

.logo{
    font-weight:bold;
    font-size:1.5rem;
    cursor:pointer;
    font-family: Arial, sans-serif;
    background-color:${({theme}) => theme.colors.primary};
    padding: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 2px #888888;
}

.logo span {
    display: inline-flex;
    background-color: #ffffff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: 0 2px;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    color:${({theme}) => theme.colors.primary};
    padding: 5px;
    border-radius: 150px;
    border-radius: 50%;
    box-shadow:  5px 5px 5px rgba(0,0,0,0.6),-1px 0px 10px rgba(0,0,0,0.3);
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