import React from 'react' 
import { Card } from '../../component'
import {MdFavorite} from "react-icons/md"
import {AiFillEye} from "react-icons/ai"
import { Rate } from '../../component'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../state/slice/cartSlice'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../../state/slice/favoriteSlice'
import { useSelector } from 'react-redux'


const ProductCard = ({slug,id, productName, rating, purchased,price,url}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAddToCart = (id, url, price, productName) => {
    dispatch(
      addToCart({
        id,
        url,
        price,
        productName
      })
    )
  }

  const handleAddfavorite = (id, url, price, productName) => {
    dispatch(
      addFavorite({
        id,
        url,
        price,
        productName
      })
    )
  }

  const {favoriteItems} = useSelector((state) => state.favorite)

  favoriteItems.map(({isFavorite}) => {
    return(
      console.log(isFavorite)
    )
  })

  return (
    <Card>
        <img src={url} alt={id} className='img' />
        <div className='cardBody'>
             <div className='name'>{productName}</div>
             <div className='rate'>
                 <span className='rating'><Rate rating={rating} /></span>
                 <span>({purchased})</span>
            </div>
            <div className='price'>
                <span>#</span>
                <span>{price}</span>
            </div>
            <button className='addCart'  onClick={() => handleAddToCart(id, url, price, productName)}>Add To Cart</button>
        </div>
        
        <div className='preview'>
            <div className='view' onClick={() => navigate(`/shop/item/${slug}`)}><AiFillEye /></div>
            <div className='favorite' onClick={() => handleAddfavorite(id, url, price, productName)}><MdFavorite /></div>
        </div>
    
    </Card>
  )
}

export default ProductCard