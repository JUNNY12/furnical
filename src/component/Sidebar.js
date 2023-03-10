import React from 'react'
import styled from "styled-components"
import { Input } from './Input'
import {AiOutlineMenu ,AiFillTwitterSquare, AiFillInstagram, AiFillFacebook} from "react-icons/ai"
import {BsFillGridFill} from "react-icons/bs"
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { devices } from '../config/mediaquery'


const Sidebar = () => {
    const [show, setShow] = useState(true)
  return (
    <Container>
        <div className='header'>
            <div 
            className={show? "activeNav itemNav" : "itemNav"}
            onClick={() => setShow(true)}>
                <span className='item' ><AiOutlineMenu /></span>
                <span >Menu</span>
            </div>
            <div
            className={!show? "activeNav itemNav" : "itemNav"}
            onClick={() => setShow(false)}
            >
                <span className='item'><BsFillGridFill /></span>
                <span>Categories</span>
            </div>
        </div>

     {
         show &&
        <div className='menuList'>
            <ul className="navList">
                <li className="navLink">
                    <NavLink to='/' className={({isActive}) => isActive? 'active' : undefined} end >Home</NavLink>
                </li>
                <li className="navLink">
                    <NavLink to='/auth/login' className={({isActive}) => isActive? 'active' : undefined} end >My account</NavLink>
                </li>
                <li className="navLink">
                    <NavLink to='/shop'  className={({isActive}) => isActive? 'active' : undefined} end >Shop</NavLink>
                </li>
                <li className="navLink">
                    <NavLink to='/wishlist'  className={({isActive}) => isActive? 'active' : undefined} end >WishList</NavLink>
                </li>
            </ul>
        </div>
     }
       {
           !show && 
            <div className='catList'>
            <ul>
                <li>
                <NavLink to={`/categories/chairs`} className={({isActive}) => isActive? 'active' : undefined} end>Chairs</NavLink>
                </li>
                
                <li>
                <NavLink to={`/categories/beds`} className={({isActive}) => isActive? 'active' : undefined} end>Beds</NavLink>
                </li>

                <li>
                <NavLink to={`/categories/kitchens`} className={({isActive}) => isActive? 'active' : undefined} end>Kitchen</NavLink>
                </li>

                <li>
                <NavLink to={`/categories/tables`} className={({isActive}) => isActive? 'active' : undefined} end>Tables</NavLink>
                </li>
            </ul>
            </div>
       }

       <div className='socialIcons'>
            <div><AiFillFacebook /> </div>
            <div><AiFillInstagram /></div>
            <div><AiFillTwitterSquare /></div>
       </div>
    </Container>
  )
}


const Container = styled.div`
position:fixed;
height:100%;
top:0;
left:0;
z-index:2;
background:${({theme}) => theme.colors.white};
width:300px;
padding:${({theme}) => theme.padding.lg};
transition: transform 6s ease,-webkit-transform 4s ease;

@media all and ${devices.mobileL}{
    width:200px;
}
.socialIcons{
    display:flex;
    justify-content:center;
    align-items:center;
    column-gap:2.5rem;
    position:absolute;
    bottom:3em;
    left:50%;
    transform:translate(-50%, -50%);
    font-size:2rem;
    color:${({theme}) => theme.colors.primary};
}

.activeNav{
    background:${({theme}) => theme.colors.gray};
}

.header{
    display:flex;
    justify-content:space-between;
    margin:${({theme}) => theme.margin.md};
    margin-bottom:${({theme}) => theme.margin.xlg};
    cursor:pointer;
    font-size:1.2rem;
    @media all and ${devices.mobileL}{
        font-size:1rem;
        margin:${({theme}) => theme.margin.sm};
    }
}

.itemNav{
    width:11rem;
    display:flex;
    align-items:center;
    justify-content:center;
    height:35px;
    @media all and ${devices.mobileL}{
        width:100px;
        margin-right:${({theme}) => theme.margin.md};
        padding:0.3rem;
    }
}

.active{
    color:${({theme}) => theme.colors.primary};
}
.item{
    margin-right:0.5rem;
    display:inline-block;
    margin-top:0.3rem;
}

.menuList>ul{
list-style-type:none;
}

.menuList>ul>li{
    margin-bottom:${({theme}) => theme.margin.lg};
    }

a{
    color:black;
    text-decoration:none;
    font-weight:500;
}
.catList>ul{
    list-style-type:none;
    font-weight:500;
}

.catList>ul>li{
    margin-bottom:${({theme}) => theme.margin.lg};
}



`

const Search = styled(Input)`
width:100%;
height:35px;
border-radius:8px;
text-indent:10px;
margin-bottom:${({theme}) => theme.margin.md};

`
export default Sidebar