import React from 'react'
import {Card} from "../../../component"
import {MdFavorite} from "react-icons/md"
import {AiFillEye} from "react-icons/ai"
import { Rate } from '../../../component'
import { useNavigate } from 'react-router-dom'

const BedCard = () => {
    const navigate = useNavigate()
  return (
    <Card>
        <img src={''} alt="img" className='img' />
        <div className='cardBody'>
             <div className='name'>{''}</div>
             <div className='rate'>
                 <span className='rating'><Rate rating={''} /></span>
                 <span>({''})</span>
            </div>
            <div className='price'>
                <span>₦</span>
                <span>{''}</span>
            </div>
            <button 
            className='addCart'
            // onClick={() => handleAddToCart()}
            >Add To Cart</button>
        </div>
        
        <div className='preview'>
            <div className='view' onClick={() =>navigate(`/shop/item/${''}`)}><AiFillEye /></div>
            <div className='favorite'><MdFavorite /></div>
        </div>
    
    </Card>
  )
}

export default BedCard