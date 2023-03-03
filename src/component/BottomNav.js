import styled from "styled-components"
import {AiFillHome, AiOutlineShoppingCart} from "react-icons/ai"
import {MdFavorite} from "react-icons/md"
import {VscAccount} from "react-icons/vsc"
import { devices } from "../config/mediaquery"
import { Link } from "react-router-dom"
import { useSelector} from "react-redux"


const BottomNav = () => {

    const userAuth = useSelector((state) => state.auth.user)
    const {cartItems} = useSelector((state) => state.cart)
    const {favoriteItems} = useSelector((state) => state.favorite)
   
  return (
    <Container>
        <div className="btIcon">
           <Link to={`/`}>
                <AiFillHome />
           </Link>
        </div>
        <div className="btIcon btCart">
          <Link to={`/cart`}>
             <AiOutlineShoppingCart/>
            <div className="btNotify">{cartItems.length}</div>
          </Link>
        </div>
        <div className="btIcon btFav">
           <Link to={`/wishlist`}>
                <MdFavorite />
                <div className="btNotify">{favoriteItems.length}</div>
           </Link>
        </div>
        {
            !userAuth?
            <Link to={`/auth/login`}>
                <div className="btIcon">
                    <VscAccount />
                </div>
            </Link>
            :
            <Link to={`/account/dashboard`}>
                <div className="btIcon">
                    <VscAccount />
                </div>
            </Link>
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
background:${({theme}) => theme.colors.white};
z-index:1;
border:1px solid ${({theme}) => theme.colors.gray};
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