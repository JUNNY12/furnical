import React from 'react'
import styled from "styled-components"
import { Rate } from '../../component'

import { CircleLoader } from 'react-spinners'

import ListCard from './ListCard'

const ListProduct = (props) => {

    const { sortedData, isLoading, isSuccess } = props

  
    return (
        <Container>
            {
                isSuccess && sortedData?.map((product) => {
                    const { id } = product
                    const {slug} = product.attributes
                    const { productName, rating, purchased, price, description , inStock} = product.attributes
                    const { url } = product.attributes.image.data.attributes
                    return (
                        <ListCard
                            id={id}
                            inStock={inStock}
                            productName={productName}
                            rating={rating}
                            purchased={purchased}
                            price={price}
                            url={url}
                            description={description}
                            slug={slug}
                        />
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
margin:${({ theme }) => theme.margin.lg};
padding:${({ theme }) => theme.padding.lg};

.img{
    border-radius: 6px;
    background: linear-gradient(145deg, #f0f0f0, #cacaca);
    box-shadow:  5px 5px 10px #808080, -5px -5px 10px #ffffff;
    cursor:pointer;
}
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
    position:absolute;
    top:50%;
    left:50%;
    color:${({ theme }) => theme.colors.white};
    transform:translate(-50%, -50%);
}

h4{
    font-size:1.2rem;
    
}
.addCart{
    margin-top:${({ theme }) => theme.margin.sm};
    outline:none;
    border:none;
    width:100%;
    color:${({ theme }) => theme.colors.white};
    padding:${({ theme }) => theme.padding.sm};
    background:${({ theme }) => theme.colors.primary};
    font-weight:bold;
    cursor:pointer;
}

.notAllowed{
    margin-top:${({ theme }) => theme.margin.sm};
    outline:none;
    border:none;
    width:100%;
    color:${({ theme }) => theme.colors.white};
    padding:${({ theme }) => theme.padding.sm};
    background:${({ theme }) => theme.colors.primary};
    font-weight:bold;
    cursor:notAllowed;
}

.outOfStock{
    color:red;
    text-decoration:line-through;
}

.isFavorite{
    color:red;
}


.span{
    margin-right:1rem;
    color:white;
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
    position:relative;
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