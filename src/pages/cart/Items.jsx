import React from 'react'
import styled from "styled-components"
import {BsFillTrashFill} from "react-icons/bs"
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"
import { devices } from '../../config/mediaquery'
import { useSelector ,useDispatch} from 'react-redux'
import { addToCart, decreaseCart,removeFromCart, getTotals } from '../../state/slice/cartSlice'
import { useEffect } from 'react'


const Items = () => {
    const cart = useSelector((state) => state.cart)
    const {cartItems} = cart

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(
            getTotals()
        )
    },[cart, dispatch])

    const handleIncrease =(product) => {
        dispatch(
            addToCart(product)
        )
    }
    const handleDecrease =(product) => {
        dispatch(
            decreaseCart(product)
        )
    }
    const handleRemove =(product) => {
        dispatch(
            removeFromCart(product)
        )
    }
    

  return (
    <Container>
        {
            !cartItems?.length == 0 &&
            <div className='cartHeader'>
                <div className='col-1'>Image</div>
                <div className='col-2'>Product</div>
                <div className='col-3'>Quantity</div>
                <div className='col-4'>Total</div>
                <div className='col-5'>Remove</div>
            </div>
        }
        {
            cartItems?.map((product) => {
                return (
                    <div key={product.id} className='cartItem'>
                        <div className='col-1'>
                        <div className='img'>
                            <img src={product?.url} alt={product?.productName} />
                        </div>
                        </div>
                        <div className='name col-2'>{product?.productName}</div>
                        <div className='quantity col-3'>
                            <span className='increase' onClick={() => handleIncrease(product)}><AiOutlinePlus /></span>
                            <span className='qty'>{product?.cartQuantity}</span>
                            <span className='decrease' onClick={() => handleDecrease(product)}><AiOutlineMinus /></span>
                        </div>
                        <div className='total col-4'>
                            <span>₦</span>
                            <span>{product?.cartQuantity * product?.price}</span>
                        </div>
                        <div className='remove col-5'
                        onClick={() => handleRemove(product)}
                        >
                            <BsFillTrashFill />
                        </div>
                    </div>
                )
            })
        }
        
      
    </Container>
  )
}

export const Container = styled.div`
background:${({theme}) => theme.colors.white};
padding:${({theme}) => theme.padding.lg};
margin: 0 ${({theme}) => theme.margin.lg} 0 ${({theme}) => theme.margin.lg};

@media all and ${devices.tablet}{
    padding:1rem;
    margin:0.5rem;
}


.cartHeader{
    display:flex;
    align-items:center;
    font-weight:550;
    @media all and ${devices.tablet}{
        display:none;
    }
}

.cartItem{
    display:flex;
    align-items:center;
    position:relative;
    margin-top:${({theme}) => theme.margin.lg};

    @media all and ${devices.tablet}{
        margin-bottom:4rem;
    }
}
.col-1{
    width:20%;
    @media all and ${devices.tablet}{
        width:33.33%;
    }
}
.col-2{
    width:30%;
    @media all and ${devices.tablet}{
        position:absolute;
        width:unset;
        bottom:-3em;
    }
}
.col-3{
    width:25%;
    @media all and ${devices.tablet}{
        width:33.33%;
    }
}
.col-4{
    width:25%;
    @media all and ${devices.tablet}{
        width:33.33%;
    }
}
.col-5{
    width:5%;
}

.qty{
    border:2px solid black;
    height:1rem;
    width:1rem;
    padding:0.5rem;
    display:inline-flex;
    justify-content:center;
    align-items:center;
    margin:0 1rem 0 1rem;
    @media all and ${devices.tablet}{
        height:0.5rem;
        width:0.5rem;
        margin:0 0.5rem 0 0.5rem;
        padding:0.35rem;
    }
}

.increase,
.decrease{
    font-size:1.2rem;
    cursor:pointer;
    @media all and ${devices.tablet}{
        font-size:1rem; 
    }
}

.remove{
    color:red;
    cursor:pointer;
    @media all and ${devices.tablet}{
        position:absolute;
        right:0;
        bottom:-3em;
    }

    @media all and ${devices.mobileL}{
        font-size:12px;
    }
}

.img{
    width:60px;
    height:60px;
    object-fit:cover;
    @media all and ${devices.tablet}{
        width:40px;
        height:40px;
    }
}

.img>img{
    width:100%;
    height:100%;
}

.name{
    @media all and ${devices.mobileL}{
        font-size:12px;
}
`

export default Items