import React from 'react' 
import { Card } from '../../component'
import {MdFavorite} from "react-icons/md"
import {AiFillEye} from "react-icons/ai"
import { Rate } from '../../component'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({slug, productName, rating, purchased, description,price,url}) => {

  const navigate = useNavigate()
  return (
    <Card>
        <img src={url} alt="img" className='img' />
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
            <button className='addCart'>Add To Cart</button>
        </div>
        
        <div className='preview'>
            <div className='view' onClick={() =>navigate(`/shop/item/${slug}`)}><AiFillEye /></div>
            <div className='favorite'><MdFavorite /></div>
        </div>
    
    </Card>
  )
}

export default ProductCard