import React from 'react'
import {Card} from "../../../component"
import {MdFavorite} from "react-icons/md"
import {AiFillEye} from "react-icons/ai"
import { Rate } from '../../../component'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../../state/slice/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { addFavorite } from '../../../state/slice/favoriteSlice'

const KitchenCard = ({id, url, slug, productName, rating, purchased, price}) => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const {favoriteItems} = useSelector(state => state.favorite)
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        const existingItem = favoriteItems.find(item => item.id === id)
        setIsFavorite(existingItem ? true : false)
    }, [favoriteItems])

    const handleAddToCart = () => {
        dispatch(addToCart({
            id,
            url,
            price,
            productName
        }))
    }

    const handleAddfavorite = () => {
        dispatch(addFavorite({
            id,
            url,
            price,
            productName
        }))
        setIsFavorite(!isFavorite)
    }

  return (
    <Card>
        <img src={url} alt={productName} className='img' />
        <div className='cardBody'>
             <div className='name'>{productName}</div>
             <div className='rate'>
                 <span className='rating'><Rate rating={rating} /></span>
                 <span>({purchased})</span>
            </div>
            <div className='price'>
                <span>₦</span>
                <span>{price}</span>
            </div>
            <button 
            className='addCart'
            onClick={() => handleAddToCart(id, url, price, productName)}
            >Add To Cart</button>
        </div>
        
        <div className='preview'>
            <div className='view' onClick={() =>navigate(`/shop/item/${slug}`)}><AiFillEye /></div>
            <div className={isFavorite ? 'isFavorite' : 'favorite'}
            onClick={() => handleAddfavorite(id, url, price, productName)} 
            >
                <MdFavorite />
            </div>
        </div>
    
    </Card>
  )
}

export default KitchenCard