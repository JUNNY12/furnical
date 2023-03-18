import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { getTotals } from "../../state/slice/cartSlice"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const Subtotal = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    console.log(cart.totalAmount)

    useEffect(() => {
        getTotals()
    }, [cart, dispatch])

  return (
    <Container>
        <div className="wrapper">
            <div className="header">Cart Total</div>
            <div>
                <div>
                    <span className="subtotal">subtotal:</span>   
                    <span className="price">₦ {cart.totalAmount}</span> 
                 </div>
            </div>

        </div>

        <div className="btnContainer">
           <Link to={`/checkout`}>
                <button className="checkout">Proceed to Checkout</button>
           </Link>
        </div>
    </Container>
  )
}


const Container = styled.div`
display:flex;
flex-direction:column;
padding:2rem 1.5rem 4rem 1.5rem;
margin-bottom:4rem;

.header{
    font-size:1.5rem;
    margin-bottom:0.5rem;
    @media all and (max-width:560px){
        font-size:1.2rem;
        font-weight:600;
    }
}
.subtotal{
    font-size:1.5rem;
    margin-right:1rem;
    @media all and (max-width:560px){
        font-size:1rem;
        font-weight:600;
    }
}

.price{
    font-size:1.5rem;
    @media all and (max-width:560px){  
        font-size:1rem;
        font-weight:600;
    } 
}

.btnContainer{
    margin-top:1.5rem;

}

.checkout{
    background:${({theme}) => theme.colors.primary};
    color:white;
    padding:1rem;
    font-size:1rem;
    border:none;
    font-weight:600;
    cursor:pointer;

    @media all and (max-width:560px){
        font-size:0.8rem;
        padding:0.8rem;
    }
}

.checkout:hover{
    background:${({theme}) => theme.colors.white};
    color:${({theme}) => theme.colors.primary};
    border:1px solid ${({theme}) => theme.colors.primary};
    transition:all 0.3s ease-in-out;
}
.wrapper{
    border:1px solid ${({theme})=> theme.colors.primary};
    width:400px;
    padding:1rem;
    
    @media all and (max-width:560px){
        width:300px;
    }
    @media all and (max-width:420px){
        width:250px;
    }

}
`

export default Subtotal