import React from 'react' 
import { Card } from '../../component'
import { img } from '../../assets'
import {MdFavorite} from "react-icons/md"
import {AiFillEye} from "react-icons/ai"
import { Rate } from '../../component'

const ProductCard = () => {
  return (
    <Card>
        <img src={img} alt="img" className='img' />
        <div className='cardBody'>
             <div className='name'>Chinese chair</div>
             <div className='rate'>
                 <span className='rating'><Rate rating={5} /></span>
                 <span>(0)</span>
            </div>
            <div className='price'>
                <span>#</span>
                <span>200,000</span>
            </div>
            <button className='addCart'>Add To Cart</button>
        </div>
        
        <div className='preview'>
            <div className='view'><AiFillEye /></div>
            <div className='favorite'><MdFavorite /></div>
        </div>
    
    </Card>
  )
}

export default ProductCard