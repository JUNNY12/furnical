import React from 'react'
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import { getTotals } from '../../state/slice/cartSlice'
import { useEffect } from 'react'

const Order = () => {
    const cart = useSelector((state) => state.cart)
    const {cartItems} = cart

    const dispatch = useDispatch()

    useEffect(() => {
        getTotals()
    },[cart ,dispatch])
  return (
    <Container>
        <h2>Your Order</h2>
        <div className='wrapper'>
            <div className='head'>
                <div>Product</div>
                <div>Subtotal ( ₦ )</div>
            </div>
            {
                cartItems?.map(({productName, price, cartQuantity}) => {
                    return(
                        <div className='product'>
                            <div>
                                <span> {productName} </span>
                                <span> X  {cartQuantity}</span>
                            </div>
                            <div>{price * cartQuantity} </div>
                        </div>
                    )
                })
            }
            <div className='total'>
                <div>Total</div>
                <div>{cart?.totalAmount}</div>
            </div>
        </div>

        <div className='placeOrder'>
            <button>Place Order</button>
        </div>

    </Container>
  )
}

const Container = styled.div`
padding-bottom:4rem;

.placeOrder{
    margin-top:2rem;
    display:flex;
    justify-content:flex-end;
 
}

.placeOrder button{
    background:${({theme}) => theme.colors.primary};
    outline:none;
    border:none;
    color:white;
    font-size:1rem;
    padding:0.7rem;
    width:150px;
    cursor:pointer;
    font-weight:bold;
}

.head,
.product,
.total{
    display:flex;
    justify-content:space-between;
    margin-bottom:1rem;
    font-weight:550;
}

.total{
    border-top:1.5px solid gray;
}

.wrapper{
    border:1px solid gray;
    padding:1rem;
    margin-top:2.5rem;
    @media all and (max-width:930px){
        margin-top:0;
    }
}
`

export default Order