import { Link , Navigate} from "react-router-dom"
import styled from "styled-components"
import {AiOutlineMail} from "react-icons/ai"
import {BiPhoneCall} from "react-icons/bi"
import {MdFavorite} from "react-icons/md"
import {AiOutlineShoppingCart} from "react-icons/ai"
import CartModal from "./CartModal"
import { useSelector } from "react-redux"
import { logout } from "../state/slice/authSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getTotals } from "../state/slice/cartSlice"


const DesktopNav = ({showCart, setShowCart}) => {
  const userAuth = useSelector((state) => state.auth.user)
  const cart = useSelector((state) => state.cart)
  const {favoriteItems} = useSelector((state) => state.favorite)
 
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(
          getTotals()
      )
  },[cart, dispatch])

  const redirect = () => {
    <Navigate to={'/auth/login'} />
  }
  const handleLogout = () => {
      dispatch(logout())
      redirect()
  } 

  return (
    <Header>
      <div className="flex">
          <a href="mailto:juwonemmanuel22@gmail.com">
             <div className="info"><AiOutlineMail /></div>
          </a>
          <a href="tel:+2349032869229">
            <div className="info"><BiPhoneCall /></div>
          </a>
      </div>

      <div className="leftFlex">
       { !userAuth ? 
        <div>
          <Link to='/auth/register'>Register</Link>
          <Link to='/auth/login'>Login</Link>
         </div>
         :
         <div className="welcome">
           <span> Welcome </span>
           <span> {userAuth?.username} !!!</span>

           <span className="logout" onClick={handleLogout}>Logout</span>
         </div>
       }

        <div className="leftNav">
          <Link to={`/wishlist`}>
            <span className="span">
              <MdFavorite />
              <span className="notify">{favoriteItems.length}</span>  
            </span>
          </Link>
          <span onClick={() => setShowCart(true)} style={{cursor:'pointer'}}>
            <span className="span">
              <AiOutlineShoppingCart />
              <span className="notify">{cart.totalQuantity}</span>    
            </span>
          </span>
          <span className="span">Cart : ₦{cart.totalAmount}</span>
        </div>
      </div>
       {
         showCart && 
         <CartModal 
         setShowCart={setShowCart}
         />
       }
    </Header>
  )
}

export default DesktopNav


const Header = styled.div`
background-color:${({theme}) => theme.colors.primary};
padding:${({theme}) => theme.padding.sm} ${({theme}) => theme.padding.xmd} ${({theme}) => theme.padding.sm}  ${({theme}) => theme.padding.xmd};
color:${({theme}) => theme.colors.white};
display:flex;
justify-content:space-between;
align-items:center;

.logout{
  margin-left:1.3rem;
  cursor:pointer;
}
.welcome{
  font-weight:500;
}

a{
  text-decoration:none;
  margin-right:${({theme}) => theme.margin.md};
  color:${({theme}) => theme.colors.white};
  font-weight:bold;
}
.flex{
display:flex;
align-items:center;
}

.info{
  margin-right:${({theme}) => theme.margin.lg};
  cursor:pointer;
  font-size:2rem;
}

.leftNav{
  background-color:#db9277;
  padding:${({theme}) => theme.padding.sm};
}

.leftFlex{
  display:flex;
  align-items:center;
  column-gap:2rem;
}

.span{
  margin-right:${({theme}) => theme.margin.lg};
  font-size:1.3rem;
  position:relative;
  display:inline-block;
}
.notify{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:1em;
  height:1em;
  background-color:${({theme}) => theme.colors.primary};
  border-radius:50%;
  position:absolute;
  top:-0.3rem;
  font-size:0.8rem;
  padding:0.2rem;
}
`