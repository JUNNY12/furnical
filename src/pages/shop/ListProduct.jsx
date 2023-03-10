import React from 'react'
import styled from "styled-components"
import { Rate } from '../../component'
import {MdFavorite} from "react-icons/md"
import {AiFillEye} from "react-icons/ai"
import { CircleLoader } from 'react-spinners'

const ListProduct = (props) => {

     const {sortedData, isLoading, isSuccess} = props

  return (
    <Container>
       {
           isSuccess && sortedData?.map((product) => {
            const {id} = product
            const {productName ,rating, purchased, price, description} = product.attributes
            const {url} = product.attributes.image.data.attributes
               return (
                <div className='list' key={id}>
                    <div className='listImg'>
                        <img src={url} alt={productName} />
                    </div>
                    <div>
                        <h4>{productName} </h4>
                        
                        <div className='price'>
                            <span>₦</span>
                            <span>{price}</span>
                        </div>
                        <div className='rate'>
                            <Rate rating={rating}/>
                            <span>({purchased})</span>
                        </div>
                        <div className='desc'>
                            {description}
                        </div>
   
                        <div>
                            <button className='addCart'>Add to cart</button>
                        </div>
                        <div className='viewFav'>
                            <span className='span'><AiFillEye /></span>
                            <span className='span'><MdFavorite /></span>
                        </div>
                    </div>
                </div>
               )
           })
       }
       {
            isLoading && <div className="loader"> <CircleLoader color="#db9277" size={150} /></div>
       }

    </Container>
  )
}

const Container = styled.section`
margin:${({theme}) => theme.margin.lg};
padding:${({theme}) => theme.padding.lg};

.loader{
    display:flex;
    justify-content:center;
    align-items:center;
  }

.price{
    font-size:1.2rem;
    margin:0.5rem 0 0.5rem 0
}
.viewFav{
    font-size:2rem;
    margin:0.5rem 0 0.5rem 0;
    cursor:pointer;
}
h4{
    font-size:1.2rem;
    
}
.addCart{
    margin-top:${({theme}) => theme.margin.sm};
    outline:none;
    border:none;
    width:100%;
    color:${({theme}) => theme.colors.white};
    padding:${({theme}) => theme.padding.sm};
    background:${({theme}) => theme.colors.primary};
    font-weight:bold;
    cursor:pointer;
}

.span{
    margin-right:1rem;
}
.list{
    display:grid;
    grid-template-columns:1fr 2.4fr;
    margin-bottom:2rem;
}
.listImg{
    width:250px;
    height:250px;
    object-fit:cover;
}

.desc{
    margin:0.5rem 0 0.5rem 0;
    font-size:12px;
}

.rate{
    display:flex;
}
.listImg>img{
    width:100%;
    height:100%;
}

`
export default ListProduct