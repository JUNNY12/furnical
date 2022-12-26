import React from 'react'
import styled from "styled-components"
import { img } from '../../assets'
import { Rate } from '../../component'
import {MdFavorite} from "react-icons/md"
import {AiFillEye} from "react-icons/ai"
import data from '../../component/Data'
import useWidth from '../../hooks/useWidth'

const ListProduct = () => {
    const width = useWidth()
  return (
    <Container>
       {
           data.map(({id, name, image, price, rate, description}) => {
               const {purchased, rating} = rate
               return (
                <div className='list'>
                    <div className='listImg'>
                        <img src={image} />
                    </div>
                    <div>
                        <h4>{name} </h4>
                        <div className='rate'>
                            <Rate rating={rating}/>
                            <span>({purchased})</span>
                        </div>
                        <div className='price'>
                            <span>#</span>
                            <span>{price}</span>
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

    </Container>
  )
}

const Container = styled.section`
margin:${({theme}) => theme.margin.lg};
padding:${({theme}) => theme.padding.lg};

.price{
    font-size:1.3rem;
    margin:0.5rem 0 0.5rem 0
}
.viewFav{
    font-size:2rem;
    margin:0.5rem 0 0.5rem 0;
    cursor:pointer;
}
h4{
    font-size:1.5rem;
    
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
    display:flex;
    column-gap:4rem;
    align-items:center;
    margin-bottom:2rem;
}
.listImg{
    width:300px;
    height:300px;
    object-fit:cover;
}

.desc{
    margin:0.5rem 0 0.5rem 0;
    font-weight:500;
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