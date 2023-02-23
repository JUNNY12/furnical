import styled from "styled-components"
import { NavLink, useLocation } from "react-router-dom"
import {AiOutlineMenu} from "react-icons/ai"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


const SecondNav = () => {
  const userAuth = useSelector((state) => state.auth.user)

  const [show, setShow] = useState(false)

  const {pathname} = useLocation()

  useEffect(() => {
    setShow(false)
  },[pathname])
  const handleShow = () => {
    setShow(prev => !prev)
  }
  return (
    <Nav>
      <div className="container">
       <div 
       className="category"
       onClick={handleShow}
       >
          <div><AiOutlineMenu /></div>
          <h1>All category</h1>
       </div>
      {
        show &&
        <div className="categoryList">
          <ul>
            <li>
              <NavLink to={`/categories/chairs`} className={({isActive}) => isActive? 'activeCat' : undefined} end>Chairs</NavLink>
            </li>
            
            <li>
              <NavLink to={`/categories/beds`} className={({isActive}) => isActive? 'activeCat' : undefined} end>Beds</NavLink>
            </li>

            <li>
              <NavLink to={`/categories/kitchens`} className={({isActive}) => isActive? 'activeCat' : undefined} end>Kitchen</NavLink>
            </li>

            <li>
              <NavLink to={`/categories/tables`} className={({isActive}) => isActive? 'activeCat' : undefined} end>Tables</NavLink>
            </li>
          </ul>
        </div>
      }
        
      </div>
      <div>
        <ul className="navList">
          <li className="navLink">
            <NavLink to='/' className={({isActive}) => isActive? 'active' : undefined} end >Home</NavLink>
          </li>
          {
            userAuth ?
            <li className="navLink">
              <NavLink to='/account/dashboard' className={({isActive}) => isActive? 'active' : undefined} end >My account</NavLink>
            </li>
            :
            <li className="navLink">
              <NavLink to='/auth/login' className={({isActive}) => isActive? 'active' : undefined} end >My account</NavLink>
           </li>
          }
          <li className="navLink">
            <NavLink to='/shop'  className={({isActive}) => isActive? 'active' : undefined} end >Shop</NavLink>
          </li>
          <li className="navLink">
            <NavLink to='/wishlist'  className={({isActive}) => isActive? 'active' : undefined} end >WishList</NavLink>
          </li>
        </ul>
      </div>
        
    </Nav>
  )
}


const Nav = styled.nav`
display:flex;
align-items:center;
column-gap:6rem;
margin:0 ${({theme}) => theme.margin.lg} 0 ${({theme}) => theme.margin.lg};
padding:0 ${({theme}) => theme.padding.lg} 0 ${({theme}) => theme.padding.lg};

a{
  color:black;
  text-decoration:none;
  font-weight:600;
}



.active{
  background-color:#db9277;
  border-top-left-radius:8px ;
  border-top-right-radius:8px ;
  padding:${({theme}) => theme.padding.sm};
}

.activeCat{
  color:#db9277;
}
.container{
  position:relative;
}

.categoryList{
  position:absolute;
  background-color:${({theme}) => theme.colors.white};
  width:250px;
  padding:${({theme}) => theme.padding.sm};
  z-index:1;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
}

.categoryList>ul{
  list-style-type:none;
}

.categoryList>ul>li{
  margin-bottom:${({theme}) => theme.margin.md};
  font-weight:550;
}
.category{
  background-color:${({theme}) => theme.colors.primary};
  padding:${({theme}) => theme.padding.sm};
  text-align:center;
  cursor:pointer;
  color:${({theme}) => theme.colors.white};
  border-top-left-radius:8px ;
  border-top-right-radius:8px ;
  font-weight:600;
  font-size:1.3rem;
  display:flex;
  height:45px;
  width:250px;
  align-items:center;
  column-gap:1rem;
}

.navList{
  display:flex;
}

.navLink{
  list-style-type:none;
  margin-right:${({theme}) => theme.margin.lg};
}
`
export default SecondNav