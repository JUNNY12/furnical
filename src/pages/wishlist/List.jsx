import React from 'react'
import { Container } from '../cart/Items'
import styled from "styled-components"
import { useSelector} from 'react-redux'
import { devices } from '../../config/mediaquery'
import ListItem from './ListItem'


const List = () => {
    const { favoriteItems } = useSelector((state) => state.favorite)

    return (
        <Section>
            <div className='cartHeader'>
                <div className='col-1'>Image</div>
                <div className='col-2'>Product</div>
                <div className='col-3'>Stock status</div>
                <div className='col-4'>Add to Cart</div>
                <div className='col-5'>Remove</div>
            </div>

            {
                favoriteItems?.map(({ id, url, productName, price, inStock }) => {
                    return (
                        <ListItem
                            id={id}
                            key={id}
                            url={url}
                            productName={productName}
                            price={price}
                            inStock={inStock}
                        />
                    )
                })
            }

        </Section>
    )
}


const Section = styled(Container)`

.lineThrough{
    text-decoration:line-through;
}

@media ${devices.tablet}{
margin-bottom:6rem;
}
.add{
    font-weight:bold;
    padding:0.4rem;
    border-radius:0.2rem;
    border:1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
    color:${({ theme }) => theme.colors.primary};
    cursor:pointer;
}
.stock{
    font-weight:500;
    @media ${devices.mobileL}{
        font-size:0.8rem;
    }
}

.red{
    color:red;
}

.green{
    color:green;
}

.name{
    font-weight:500;
    @media ${devices.mobileL}{
        font-size:0.8rem;
    }
}
`


export default List