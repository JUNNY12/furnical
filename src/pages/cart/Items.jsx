import React from 'react'
import styled from "styled-components"
import { img } from '../../assets'
import {BsFillTrashFill} from "react-icons/bs"
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"
import { devices } from '../../config/mediaquery'


const Items = () => {
  return (
    <Container>
        <div className='cartHeader'>
            <div className='col-1'>Image</div>
            <div className='col-2'>Product</div>
            <div className='col-3'>Quantity</div>
            <div className='col-4'>Total</div>
            <div className='col-5'>Remove</div>
        </div>
        <div className='cartItem'>
            <div className='col-1'>
               <div className='img'>
                 <img src={img} alt='cart' />
               </div>
            </div>
            <div className='name col-2'>Japanese free chair</div>
            <div className='quantity col-3'>
                <span className='decrease'><AiOutlinePlus /></span>
                <span className='qty'>2</span>
                <span className='decrease'><AiOutlineMinus /></span>
            </div>
            <div className='total col-4'>
                <span>#</span>
                <span>50,000</span>
            </div>
            <div className='remove col-5'>
                <BsFillTrashFill />
            </div>
        </div>
        
        <div className='cartItem'>
            <div className='col-1'>
               <div className='img'>
                 <img src={img} alt='cart' />
               </div>
            </div>
            <div className='name col-2'>Japanese free chair</div>
            <div className='quantity col-3'>
                <span className='decrease'><AiOutlinePlus /></span>
                <span className='qty'>2</span>
                <span className='decrease'><AiOutlineMinus /></span>
            </div>
            <div className='total col-4'>
                <span>#</span>
                <span>50,000</span>
            </div>
            <div className='remove col-5'>
                <BsFillTrashFill />
            </div>
        </div>
    </Container>
  )
}

export const Container = styled.div`
background:${({theme}) => theme.colors.white};
padding:${({theme}) => theme.padding.lg};
margin:${({theme}) => theme.margin.lg};

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
        bottom:-1.5em;
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
    @media all and ${devices.tablet}{
        position:absolute;
        right:0;
        bottom:-1.5em;
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
`

export default Items