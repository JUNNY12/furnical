import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFavorite } from '../../state/slice/favoriteSlice'
import { addToCart } from '../../state/slice/cartSlice'
import { BsFillTrashFill } from "react-icons/bs"

const ListItem = (props) => {

    const { id, url, productName, price, inStock } = props

    const dispatch = useDispatch()

    const handleRemoveFavorite = (id) => {
        dispatch(removeFavorite({ id }))
        console.log(id)
    }

    const handleAddToCart = (id, url, price, productName) => {
        dispatch(
            addToCart({
                id,
                url,
                price,
                productName,
            }),
        )
    }

    const productItem = useSelector((state) => state.cart.cartItems.find((item) => item.id === id));
    const buttonText = productItem ? "In cart" : "Add To Cart";

    return (
        <div className='cartItem' key={id}>
            <div className='col-1'>
                <div className='img'>
                    <img src={url} alt={productName} />
                </div>
            </div>
            <div className='name col-2'>{productName}</div>
            <div className='quantity stock col-3'>
                {
                    inStock ? <span className='green'>In Stock</span> : <span className='red'>Out of Stock</span>
                }
            </div>
            <div className='total col-4'>
                <button className='add' disabled={!inStock} onClick={() => handleAddToCart(id, url, price, productName)}>
                    <span className={inStock ? "" : "lineThrough"}>{buttonText}</span>
                </button>
            </div>
            <div onClick={() => handleRemoveFavorite(id)} className='remove col-5'>
                <BsFillTrashFill />
            </div>
        </div>
    )
}

export default ListItem