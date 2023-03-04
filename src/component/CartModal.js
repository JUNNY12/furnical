import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import {ImCancelCircle} from "react-icons/im"
import {useSelector, useDispatch} from "react-redux"
import { getTotals } from '../state/slice/cartSlice'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const CartModal = ({setShowCart}) => {
    const cart = useSelector((state) => state.cart)
    const {cartItems} = cart
    const dispatch = useDispatch()

    const {pathname} = useLocation()

    useEffect(() => {
        setShowCart(prev=> !prev)
    },[pathname])

    useEffect(() => {
        getTotals()
    },[cart, dispatch])

  return (
    <Container>
        <div>
            <div 
            className='cancel'
            onClick={() => setShowCart(false)}>
                <ImCancelCircle />
            </div>
            {
                cartItems?.map(({id, url , productName,price, cartQuantity}) =>{
                    return(
                        <div className='item' key={id}>
                            <div className='cartImage'>
                                <img src={url}  alt={productName}/>
                            </div>
                            <div>
                                <div className='name'>
                                    {productName}
                                </div>
                                <div className='qtyCart'> Qty : {cartQuantity}</div>
                                <div className='price'>
                                    <span>₦</span>
                                    <span>{price * cartQuantity}</span>
                                </div>
                            </div>
                      </div>
                    )
                })
            }
            
        </div>
        <div className='subtotal'>
            <div>Subtotal</div>
            <div>₦ {cart?.totalAmount}</div>
        </div>
        <div className='view'>
            <div>
               <Link to={`/cart`}>
                <button className='btn'>View Cart</button>
               </Link>
            </div>
            <div>
               <Link to={`/checkout`}>
                <button className='btn'>Checkout</button>
               </Link>
            </div>
        </div>

    </Container>
  )
}


const Container = styled.div`
position:absolute;
width:400px;
height:300px;
overflow:auto;
right:4em;
top:7em;
background:${({theme}) => theme.colors.white};
border:1.5px solid ${({theme}) => theme.colors.gray};
color:black;
padding:${({theme}) => theme.padding.xmd};
box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
border-radius:4px;
z-index:4;
.cartImage{
    width:60px;
    height:60px;
    object-fit:cover;
}

.cancel{
    position:absolute;
    right:0.5em;
    top:0.3em;
    font-size:1.3rem;
    cursor:pointer;
}
.subtotal{
    display:flex;
    align-items:center; 
    justify-content:space-between;
    font-size:1.3rem;
}
.cartImage>img{
    width:100%;
    height:100%;
}

.name,
.price{
    font-weight:550;
    margin:0.3rem 0 0.3rem 0;
}
.btn{
outline:none;
border:1.5px solid ${({theme}) => theme.colors.gray};
background:${({theme}) => theme.colors.white};
padding:${({theme}) => theme.padding.sm};
width:9rem;
cursor:pointer;
font-weight:bold;
}

.item{
    display:flex;
    align-items:center;
    gap:3rem;
    margin-bottom:2rem;
}
.view{
    background:${({theme}) => theme.colors.primary}; 
    padding:${({theme}) => theme.padding.xmd};
    margin-top:${({theme}) => theme.padding.xmd};
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    row-gap:1rem;
}
`
export default CartModal