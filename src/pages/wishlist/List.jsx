import React from 'react'
import { Container } from '../cart/Items'
import { img } from '../../assets'
import {BsFillTrashFill} from "react-icons/bs"
import { devices } from '../../config/mediaquery'
import {AiOutlineShoppingCart} from "react-icons/ai"
import styled from "styled-components"
import { useSelector } from 'react-redux'

const List = () => {
    const {favoriteItems} = useSelector((state) => state.favorite)
    console.log(favoriteItems)
  return (
    <Section>
        <div className='cartHeader'>
            <div className='col-1'>Image</div>
            <div className='col-2'>Product</div>
            <div className='col-3'>Stock status</div>
            <div className='col-4'>Add to Cart</div>
            <div className='col-5'>Remove</div>
        </div>

        {
            favoriteItems?.map(({id, url , productName}) => {
                
                return(
                    <div className='cartItem' key={id}>
                        <div className='col-1'>
                        <div className='img'>
                            <img src={url} alt={productName} />
                        </div>
                        </div>
                        <div className='name col-2'>{productName}</div>
                        <div className='quantity stock col-3'>
                            In stock
                        </div>
                        <div className='total col-4'>
                            <button className='add'>
                                <span>Add to Cart</span>
                            </button>
                        </div>
                        <div className='remove col-5'>
                            <BsFillTrashFill />
                        </div>
                    </div>  
                )
            })
        }
      
    </Section>
  )
}


const Section = styled(Container)`

.add{
    font-weight:bold;
    padding:0.4rem;
}
.stock{
    font-weight:500;
}

.name{
    
    font-weight:500;
}
`


export default List