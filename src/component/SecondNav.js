import styled from "styled-components"
import { NavLink } from "react-router-dom"

const SecondNav = () => {
  return (
    <Nav>
      <div className="category">All Categories</div>
      <div>
        <ul>
          <li>
            <NavLink to='/' className={({isActive}) => isActive? 'active' : undefined} end >Home</NavLink>
          </li>
          <li>
            <NavLink to='/login'>My account</NavLink>
          </li>
          <li>
            <NavLink to='/shop'>Shop</NavLink>
          </li>
          <li>
            <NavLink to='/wishlist'>WishList</NavLink>
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

a:hover{
  background-color:#db9277;
  border-top-left-radius:8px ;
  border-top-right-radius:8px ;
  padding:${({theme}) => theme.padding.sm};
}

.active{
  background-color:#db9277;
  border-top-left-radius:8px ;
  border-top-right-radius:8px ;
  padding:${({theme}) => theme.padding.sm};
}

.category{
  background-color:${({theme}) => theme.colors.primary};
  padding:${({theme}) => theme.padding.md};
  width:200px;
  text-align:center;
  cursor:pointer;
  color:${({theme}) => theme.colors.white};
  border-top-left-radius:8px ;
  border-top-right-radius:8px ;
  font-weight:600;
  font-size:1.3rem;

}

ul{
  display:flex;
}

li{
  list-style-type:none;
  margin-right:${({theme}) => theme.margin.lg};
  width:7rem;
}
`
export default SecondNav