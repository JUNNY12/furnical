import styled from "styled-components"
import {AiFillHome, AiOutlineShoppingCart} from "react-icons/ai"
import {MdFavorite} from "react-icons/md"
import {VscAccount} from "react-icons/vsc"
import { devices } from "../config/mediaquery"
const BottomNav = () => {
  return (
    <Container>
        <div className="btIcon">
            <AiFillHome />
        </div>
        <div className="btIcon btCart">
            <AiOutlineShoppingCart/>
            <div className="btNotify">2</div>
        </div>
        <div className="btIcon btFav">
            <MdFavorite />
            <div className="btNotify">3</div>
        </div>
        <div className="btIcon">
            <VscAccount />
        </div>
        
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