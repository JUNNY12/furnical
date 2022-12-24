import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { img } from '../assets'
import {ImCancelCircle} from "react-icons/im"

const CartModal = ({setShowCart}) => {
  return (
    <Container>
        <div>
            <div 
            className='cancel'
            onClick={() => setShowCart(false)}>
                <ImCancelCircle />
            </div>
            <div className='item'>
                <div className='cartImage'>
                    <img src={img}  alt="img"/>
                </div>
                <div>
                    <div className='name'>
                        Cameroon Chairs
                    </div>
                    <div className='qtyCart'> Qty : 3</div>
                    <div className='price'>
                        <span>#</span>
                        <span>65,000</span>
                    </div>
                </div>
            </div>
             <div className='item'>
                <div className='cartImage'>
                    <img src={img} />
                </div>
                <div>
                    <div className='name'>
                        Cameroon Chairs
                    </div>
                    <div className='qtyCart'> Qty : 3</div>
                    <div className='price'>
                        <span>#</span>
                        <span>65,000</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='subtotal'>
            <div>Subtotal</div>
            <div>#20,000</div>
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
right:4em;
top:7em;
background:${({theme}) => theme.colors.white};
border:1.5px solid ${({theme}) => theme.colors.gray};
color:black;
padding:${({theme}) => theme.padding.xmd};
box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
border-radius:4px;

.cartImage{
    width:60px;
    height:60px;
    object-fit:cover;
}

.cancel{
    position:absolute;
    right:0.5em;
    top:0.1em;
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