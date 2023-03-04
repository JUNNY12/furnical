import React from 'react'
import { Container } from '../cart/Items'
import {BsFillTrashFill} from "react-icons/bs"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import { removeFavorite } from '../../state/slice/favoriteSlice'
import { addToCart } from '../../state/slice/cartSlice'



const List = () => {

    const {favoriteItems} = useSelector((state) => state.favorite)
    const dispatch = useDispatch()

    const handleRemoveFavorite = (id) => {
        dispatch(removeFavorite({id}))
        console.log(id)
    }

    const handleAddToCart = (id, url, price, productName) => {
        dispatch(
            addToCart({
                id,
                url,
                price,
                productName,
            })
        )
    }
    
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
            favoriteItems?.map(({id, url , productName, price}) => {
                console.log(price)
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
                            <button className='add' onClick={() => handleAddToCart(id, url, productName, price)}>
                                <span>Add to Cart</span>
                            </button>
                        </div>
                        <div onClick={() => handleRemoveFavorite(id)} className='remove col-5'>
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
    border-radius:0.2rem;
    border:1px solid ${({theme}) => theme.colors.primary};
    background-color: ${({theme}) => theme.colors.white};
    color:${({theme}) => theme.colors.primary};
    cursor:pointer;
}
.stock{
    font-weight:500;
}

.name{
    
    font-weight:500;
}
`


export default List