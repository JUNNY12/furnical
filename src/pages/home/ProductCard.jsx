import React from 'react' 
import { Card } from '../../component'
import { img } from '../../assets'


const ProductCard = () => {
  return (
    <Card>
        <img src={img} alt="img" className='img' />
        <div className='cardBody'>
             <div className='name'>Chinese chair</div>
             <div className='rate'>
                 <span>(0)</span>
            </div>
            <div className='price'>
                <span>#</span>
                <span>200,000</span>
            </div>
            <button className='addCart'>Add To Cart</button>
        </div>
        
        <div className='preview'>
            <div>view</div>
            <div>Favorite</div>
        </div>
    
    </Card>
  )
}

export default ProductCard