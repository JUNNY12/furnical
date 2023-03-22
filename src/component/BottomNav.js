import styled from "styled-components"
import {AiFillHome, AiOutlineShoppingCart} from "react-icons/ai"
import {MdFavorite} from "react-icons/md"
import {VscAccount} from "react-icons/vsc"
import { devices } from "../config/mediaquery"
import { NavLink } from "react-router-dom"
import { useSelector} from "react-redux"



const BottomNav = () => {

    const userAuth = useSelector((state) => state.auth.user)
    const {cartItems} = useSelector((state) => state.cart)
    const {favoriteItems} = useSelector((state) => state.favorite)
   
  return (
    <Container>
        <div className="btIcon">
           <NavLink className={({isActive})=> isActive? "active" : undefined} end to={`/`}>
                <AiFillHome />
           </NavLink>
        </div>
        <div className="btIcon btCart">
          <NavLink className={({isActive})=> isActive? "active" : undefined} end to={`/cart`}>
             <AiOutlineShoppingCart/>
            <div className="btNotify">{cartItems.length}</div>
          </NavLink>
        </div>
        <div className="btIcon btFav">
           <NavLink className={({isActive})=> isActive? "active" : undefined} end to={`/wishlist`}>
                <MdFavorite />
                <div className="btNotify">{favoriteItems.length}</div>
           </NavLink>
        </div>
        {
            !userAuth?
            <NavLink className={({isActive})=> isActive? "active" : undefined} end to={`/auth/login`}>
                <div className="btIcon">
                    <VscAccount />
                </div>
            </NavLink>
            :
            <NavLink to={`/account/dashboard`} className={({isActive})=> isActive? "active" : undefined} >
                <div className="btIcon">
                    <VscAccount />
                </div>
            </NavLink>
        }
        
    </Container>
  )
}


const Container = styled.nav`
position:fixed;
bottom:0;
display:flex;
justify-content:center;
align-items:center;
background:${({theme}) => theme.colors.gray};
z-index:1;
border-top:1.5px solid rgba(0,0,0,0.2);
width:100%;
left:0;
padding:${({theme}) => theme.padding.md};
a{
    color:black;
}
.btIcon{
font-size:1.3rem;
margin-right:3rem;

@media all and ${devices.tablet}{
    margin-right:6rem; 
}

.active{
    border-bottom:3px solid ${({theme}) => theme.colors.primary};
}

@media all and (max-width:600px){
    margin-right:3rem; 
}

}

.btCart,
.btFav{
    position:relative;
}

.btNotify{
    background:${({theme}) => theme.colors.primary};
    position:absolute;
    width:0.5em;
    height:0.5em;
    border-radius:50%;
    top:-0.2rem;
    right:-0.8em;
    padding:0.4rem;
    color:${({theme}) => theme.colors.white};
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:0.6rem;
}
`
export default BottomNav